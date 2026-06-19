/**
 * lotesCalculator.test.js — Validação dos 8 Lotes Herméticos · Ars Akasha
 *
 * Usa DADOS SINTÉTICOS com valores redondos para verificação manual.
 * Fórmulas per sistema Ars Akasha (Mago HNS RE, verificadas 19/06/2026):
 *
 *   DIURNO (Sol acima do horizonte, casas 7–12):
 *     Fortuna     = ASC + Lua − Sol
 *     Espírito    = ASC + Sol − Lua
 *     Eros        = ASC + Vênus − Espírito
 *     Necessidade = ASC + Fortuna − Mercúrio
 *     Coragem     = ASC + Fortuna − Marte
 *     Vitória     = ASC + Espírito − Júpiter
 *     Nemesis     = ASC + Fortuna − Saturno
 *     Infortúnio  = ASC + Marte − Saturno
 *
 *   NOTURNO (Sol abaixo do horizonte, casas 1–6):
 *     Fortuna     = ASC + Sol − Lua
 *     Espírito    = ASC + Lua − Sol
 *     Eros        = ASC + Espírito − Vênus
 *     Necessidade = ASC + Mercúrio − Fortuna
 *     Coragem     = ASC + Marte − Fortuna
 *     Vitória     = ASC + Júpiter − Espírito
 *     Nemesis     = ASC + Saturno − Fortuna
 *     Infortúnio  = ASC + Saturno − Marte
 */

const { calcularLotes, isDiurno, degToSigno, normalizeDeg } = require("./lotesCalculator");
const { interpretLotes } = require("./lotesInterpreter");

// ─── Dados sintéticos DIURNO ──────────────────────────────────────────────────
//
//   ASC      =  60° (Touro 00°)
//   Sol      = 241° (Sagitário 01°) → arco Sol−ASC = 181° ≥ 180° → DIURNO
//   Lua      = 150° (Virgem 00°)
//   Mercúrio = 120° (Gêmeos 00°)
//   Vênus    = 180° (Libra 00°)
//   Marte    = 240° (Sagitário 00°)
//   Júpiter  =   0° (Áries 00°)
//   Saturno  = 330° (Aquário 00°)
//
//   Cálculo manual (mod 360):
//   Fortuna     = 60 + 150 − 241 = −31  → 329° (Aquário 29°)
//   Espírito    = 60 + 241 − 150 = 151° (Virgem 01°)
//   Eros        = 60 + 180 − 151 =  89° (Gêmeos 29°)
//   Necessidade = 60 + 329 − 120 = 269° (Sagitário 29°)
//   Coragem     = 60 + 329 − 240 = 149° (Leão 29°)
//   Vitória     = 60 + 151 −   0 = 211° (Escorpião 01°)
//   Nemesis     = 60 + 329 − 330 =  59° (Touro 29°)
//   Infortúnio  = 60 + 240 − 330 = −30  → 330° (Aquário 00°)

// cuspideCasa8 = 240° (Sagitário 00°)
// Morte = ASC + Casa8 − Lua = 60 + 240 − 150 = 150° (Virgem 00°)
const MAPA_D = {
  asc: 60, sol: 241, lua: 150,
  mercurio: 120, venus: 180, marte: 240, jupiter: 0, saturno: 330,
  cuspideCasa8: 240,
};

// ─── Dados sintéticos NOTURNO ─────────────────────────────────────────────────
//
//   ASC      = 300° (Capricórnio 00°)
//   Sol      = 100° (Câncer 10°) → arco Sol−ASC = 160° < 180° → NOTURNO
//   Lua      = 200° (Escorpião 20°)
//   Mercúrio = 130°
//   Vênus    =  40°
//   Marte    =  20°
//   Júpiter  = 250°
//   Saturno  =  70°
//
//   Fortuna     (noturno) = 300 + 100 − 200 = 200° (Escorpião 20°)
//   Espírito    (noturno) = 300 + 200 − 100 = 400 → 40° (Touro 10°)
//   Eros        (noturno) = 300 + 40 − 40   = 300° (Capricórnio 00°)
//   Necessidade (noturno) = 300 + 130 − 200 = 230° (Escorpião 20°)
//   Coragem     (noturno) = 300 + 20 − 200  = 120° (Leão 00° → Gêmeos 00°... 120° = Leão 00° not right)
//   Wait: 120° = Gêmeos 00° (signo 4 = Gêmeos: 60–90 = Gêmeos? No: 0=Áries,30=Touro,60=Gêmeos,90=Câncer,120=Leão)
//   120° → floor(120/30)=4 → Leão 00° ✓
//   Vitória     (noturno) = 300 + 250 − 40  = 510 → 150° (Virgem 00°)
//   Nemesis     (noturno) = 300 + 70 − 200  = 170° (Virgem 20°)
//   Infortúnio  (noturno) = 300 + 70 − 20   = 350° (Peixes 20°)

// cuspideCasa8 = 120° (Gêmeos 00°)
// Morte = ASC + Casa8 − Lua = 300 + 120 − 200 = 220° (Escorpião 10°)
const MAPA_N = {
  asc: 300, sol: 100, lua: 200,
  mercurio: 130, venus: 40, marte: 20, jupiter: 250, saturno: 70,
  cuspideCasa8: 120,
};

// ─── Helpers ──────────────────────────────────────────────────────────────────

let ok = 0, fail = 0;

function assert(desc, cond, detalhe) {
  if (cond) { console.log(`  PASS  ${desc}`); ok++; }
  else       { console.error(`  FAIL  ${desc}${detalhe ? " — " + detalhe : ""}`); fail++; }
}

function assertDeg(desc, got, exp, tol) {
  const d = Math.abs(got - exp);
  if (d <= (tol || 0.001)) { console.log(`  PASS  ${desc} → ${got.toFixed(1)}°`); ok++; }
  else { console.error(`  FAIL  ${desc} → obtido ${got.toFixed(3)}°, esperado ${exp}° (Δ=${d.toFixed(3)})`); fail++; }
}

function L(calc, id) { return calc.lotes.find(l => l.id === id); }

// ─── Testes ───────────────────────────────────────────────────────────────────

console.log("\n════════════════════════════════════════════════════════════════");
console.log("  8 LOTES HERMÉTICOS — Validação · Sistema Ars Akasha");
console.log("════════════════════════════════════════════════════════════════\n");

// 1. isDiurno
console.log("1. isDiurno()");
assert("DIURNO: arco 181° ≥ 180°",  isDiurno(MAPA_D.sol, MAPA_D.asc) === true);
assert("NOTURNO: arco 160° < 180°", isDiurno(MAPA_N.sol, MAPA_N.asc) === false);
assert("Limiar 180° = diurno",       isDiurno(180, 0) === true);
assert("179° = noturno",             isDiurno(179, 0) === false);
console.log();

// 2. Mapa DIURNO — todos os 8 lotes
console.log("2. Mapa DIURNO — Fortuna e Espírito");
const calcD = calcularLotes(MAPA_D);
assert("Sect = Diurno", calcD.diurno === true);
assertDeg("Fortuna  = ASC + Lua − Sol",    L(calcD,"fortuna").grauAbsoluto,  329);
assertDeg("Espírito = ASC + Sol − Lua",    L(calcD,"espirito").grauAbsoluto, 151);
assert("Fortuna → Aquário", L(calcD,"fortuna").posicao.signo === "Aquário");
assert("Espírito → Virgem", L(calcD,"espirito").posicao.signo === "Virgem");
console.log();

console.log("3. Mapa DIURNO — Eros, Necessidade, Coragem");
assertDeg("Eros        = ASC + Vênus − Espírito",   L(calcD,"eros").grauAbsoluto,        89);
assertDeg("Necessidade = ASC + Fortuna − Mercúrio", L(calcD,"necessidade").grauAbsoluto, 269);
assertDeg("Coragem     = ASC + Fortuna − Marte",    L(calcD,"coragem").grauAbsoluto,     149);
assert("Eros → Gêmeos",        L(calcD,"eros").posicao.signo === "Gêmeos");
assert("Necessidade → Sagitário", L(calcD,"necessidade").posicao.signo === "Sagitário");
assert("Coragem → Leão",       L(calcD,"coragem").posicao.signo === "Leão");
console.log();

console.log("4. Mapa DIURNO — Vitória, Nemesis, Infortúnio");
// Vitória (diurno) = ASC + Júpiter − Espírito = 60 + 0 − 151 = −91 → 269°
assertDeg("Vitória    = ASC + Júpiter − Espírito", L(calcD,"vitoria").grauAbsoluto,    269);
assertDeg("Nemesis    = ASC + Fortuna − Saturno",  L(calcD,"nemesis").grauAbsoluto,     59);
assertDeg("Infortúnio = ASC + Marte − Saturno",    L(calcD,"infortunio").grauAbsoluto, 330);
assert("Vitória → Sagitário",  L(calcD,"vitoria").posicao.signo === "Sagitário");
assert("Nemesis → Touro",      L(calcD,"nemesis").posicao.signo === "Touro");
assert("Infortúnio → Peixes",  L(calcD,"infortunio").posicao.signo === "Peixes");
// Morte = ASC + Casa8 − Lua = 60 + 240 − 150 = 150° → Virgem 00°
assertDeg("Morte       = ASC + Casa8 − Lua",           L(calcD,"morte").grauAbsoluto,      150);
assert("Morte → Virgem",        L(calcD,"morte").posicao.signo === "Virgem");
assert("Total DIURNO = 9 lotes", calcD.lotes.length === 9);
console.log();

// 3. Mapa NOTURNO — inversão
console.log("5. Mapa NOTURNO — inversão das fórmulas");
const calcN = calcularLotes(MAPA_N);
assert("Sect = Noturno", calcN.diurno === false);
assertDeg("Fortuna     (noturno) = ASC + Sol − Lua",       L(calcN,"fortuna").grauAbsoluto,      200);
assertDeg("Espírito    (noturno) = ASC + Lua − Sol",       L(calcN,"espirito").grauAbsoluto,      40);
assertDeg("Eros        (noturno) = ASC + Espírito − Vênus",L(calcN,"eros").grauAbsoluto,         300);
assertDeg("Necessidade (noturno) = ASC + Mercúrio − Fort", L(calcN,"necessidade").grauAbsoluto,  230);
assertDeg("Coragem     (noturno) = ASC + Marte − Fortuna", L(calcN,"coragem").grauAbsoluto,      120);
assertDeg("Vitória     (noturno) = ASC + Espírito − Júpiter", L(calcN,"vitoria").grauAbsoluto,   90);
assertDeg("Nemesis     (noturno) = ASC + Saturno − Fort",  L(calcN,"nemesis").grauAbsoluto,      170);
assertDeg("Infortúnio  (noturno) = ASC + Saturno − Marte", L(calcN,"infortunio").grauAbsoluto,  350);
// Morte = ASC + Casa8 − Lua = 300 + 120 − 200 = 220° → Escorpião 10°
assertDeg("Morte       (fixo)    = ASC + Casa8 − Lua",    L(calcN,"morte").grauAbsoluto,       220);
assert("Morte noturno → Escorpião", L(calcN,"morte").posicao.signo === "Escorpião");
assert("Total NOTURNO = 9 lotes", calcN.lotes.length === 9);
console.log();

// 4. Normalização
console.log("6. Graus em [0°, 360°)");
[...calcD.lotes, ...calcN.lotes].forEach(l => {
  assert(`${l.id}: ${l.grauAbsoluto.toFixed(0)}°`, l.grauAbsoluto >= 0 && l.grauAbsoluto < 360);
});
console.log();

// 5. interpretLotes + database
console.log("7. interpretLotes() — database e estrutura");
const interpD = interpretLotes(MAPA_D);
assert("sect = 'Diurno'",                   interpD.sect === "Diurno");
assert("9 lotes no resumo",                 interpD.resumo.length === 9);
assert("infortunio.ficha.regente correto",  interpD.lotes.infortunio.ficha.regente === "Marte/Saturno");
assert("vitoria.ficha.confiancaFonte=alta", interpD.lotes.vitoria.ficha.confiancaFonte === "alta");
assert("eros.ficha.nome correto",           interpD.lotes.eros.ficha.nome === "Eros");
console.log();

// 6. Tabelas finais
function tabelaLotes(calc, interp, titulo) {
  console.log(`    ${titulo}`);
  console.log(`    ${"Lote".padEnd(24)} ${"Posição".padEnd(18)} Fórmula`);
  console.log("    " + "─".repeat(72));
  calc.lotes.forEach(l => {
    const pos = l.posicaoStr.padEnd(18);
    console.log(`    ${l.nome.padEnd(24)} ${pos} ${l.formula}`);
  });
  console.log();
}

tabelaLotes(calcD, interpD, "DIURNO");
tabelaLotes(calcN, interpretLotes(MAPA_N), "NOTURNO");

// Resultado
const total = ok + fail;
console.log("════════════════════════════════════════════════════════════════");
console.log(` RESULTADO: ${ok}/${total} passaram${fail > 0 ? ` | ${fail} FALHOU` : " ✓"}`);
console.log("════════════════════════════════════════════════════════════════\n");
if (fail > 0) process.exit(1);
