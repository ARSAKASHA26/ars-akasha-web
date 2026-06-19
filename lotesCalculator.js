/**
 * lotesCalculator.js — Cálculo dos 11 Lotes Herméticos (Partes Arábicas)
 * Sistema Ars Akasha · Astrologia Helenística / Panaretos
 *
 * Entrada: posições planetárias em graus absolutos (0–360°), já calculadas
 *   pelo motor calcular_mapa_natal.py (Swiss Ephemeris).
 *
 * Os 8 lotes calculados (sistema Ars Akasha):
 *   1. Fortuna       — corpo, saúde, vitalidade, destino material
 *   2. Espírito      — propósito da alma, vocação, missão espiritual
 *   3. Eros          — amor, desejo, atração, vínculos emocionais
 *   4. Necessidade   — destino compulsório, eventos inevitáveis
 *   5. Coragem       — iniciativa, capacidade de enfrentar adversidades
 *   6. Vitória       — reconhecimento, conquistas, resultados positivos
 *   7. Nemesis       — justiça do destino, consequência, equilíbrio kármico
 *   8. Infortúnio    — lesão física, doença crônica, crise (Casas 6 e 12)
 *   9. Morte         — crises profundas, transformação radical, encerramento de ciclos
 *
 * Fórmulas conforme Paulus Alexandrinus (séc. IV d.C.), tradição helenística canônica.
 * Validadas via dados sintéticos em lotesCalculator.test.js.
 */

// ─── Constantes zodiacais ─────────────────────────────────────────────────────

const _LOTES_SIGNOS = [
  "Áries", "Touro", "Gêmeos", "Câncer",
  "Leão", "Virgem", "Libra", "Escorpião",
  "Sagitário", "Capricórnio", "Aquário", "Peixes",
];

// ─── Utilitários ──────────────────────────────────────────────────────────────

/**
 * Normaliza qualquer valor em grau para o intervalo [0, 360°).
 * @param {number} deg
 * @returns {number}
 */
function normalizeDeg(deg) {
  return ((deg % 360) + 360) % 360;
}

/**
 * Converte grau absoluto (0–360°) em objeto { signo, grauNoSigno, minutos }.
 * @param {number} deg — grau absoluto normalizado
 * @returns {{ signo: string, grauNoSigno: number, minutos: number, grauDecimal: number }}
 */
function degToSigno(deg) {
  const d        = normalizeDeg(deg);
  const idx      = Math.floor(d / 30);
  const grauDec  = d - idx * 30;
  const grau     = Math.floor(grauDec);
  const minutos  = Math.round((grauDec - grau) * 60);
  return {
    signo:       _LOTES_SIGNOS[idx],
    grauNoSigno: grau,
    minutos,
    grauDecimal: grauDec,
    grauAbsoluto: d,
  };
}

/**
 * Formata posição como string legível, ex.: "Libra 04°22'".
 * @param {{ signo, grauNoSigno, minutos }} pos
 * @returns {string}
 */
function formatPos(pos) {
  const g = String(pos.grauNoSigno).padStart(2, "0");
  const m = String(pos.minutos).padStart(2, "0");
  return `${pos.signo} ${g}°${m}'`;
}

// ─── Sect (diurno / noturno) ──────────────────────────────────────────────────

/**
 * Determina se o mapa é diurno ou noturno.
 *
 * Diurno  = Sol acima do horizonte → Sol nas casas 7–12 (arco ASC → DSC pelo MC).
 * Noturno = Sol abaixo do horizonte → Sol nas casas 1–6.
 *
 * Método: calcula o arco do Sol a partir do Ascendente em sentido anti-horário
 * (direção de movimento das casas). Se esse arco estiver entre 180° e 360°
 * (equivale a casas 7–12), o Sol está acima do horizonte → diurno.
 *
 * @param {number} solDeg — grau absoluto do Sol
 * @param {number} ascDeg — grau absoluto do Ascendente
 * @returns {boolean} true = diurno, false = noturno
 */
function isDiurno(solDeg, ascDeg) {
  const arco = normalizeDeg(solDeg - ascDeg);
  // Arco 180°–360° → Sol nas casas 7–12 → diurno
  return arco >= 180;
}

// ─── Cálculo dos 11 lotes ─────────────────────────────────────────────────────

/**
 * Calcula os 11 Lotes Herméticos a partir das posições planetárias.
 *
 * @param {{
 *   asc:          number,  — Ascendente (grau absoluto)
 *   sol:          number,  — Sol
 *   lua:          number,  — Lua
 *   mercurio:     number,  — Mercúrio
 *   venus:        number,  — Vênus
 *   marte:        number,  — Marte
 *   jupiter:      number,  — Júpiter
 *   saturno:      number,  — Saturno
 *   cuspideCasa8: number,  — Cúspide da Casa 8
 * }} planetas
 *
 * @returns {{
 *   diurno: boolean,
 *   lotes: Array<{
 *     id:         string,
 *     nome:       string,
 *     formula:    string,
 *     grauAbsoluto: number,
 *     posicao:    { signo, grauNoSigno, minutos, grauDecimal, grauAbsoluto },
 *     posicaoStr: string,
 *   }>
 * }}
 */
function calcularLotes(planetas) {
  const { asc, sol, lua, mercurio, venus, marte, jupiter, saturno, cuspideCasa8 } = planetas;

  const diurno = isDiurno(sol, asc);

  // ── Fortuna e Espírito calculados primeiro (dependências) ──────────────────
  const fortuna  = normalizeDeg(diurno
    ? asc + lua - sol
    : asc + sol - lua);

  const espirito = normalizeDeg(diurno
    ? asc + sol - lua
    : asc + lua - sol);

  // ── Definição dos 11 lotes ─────────────────────────────────────────────────
  const lotesDef = [
    {
      id:      "fortuna",
      nome:    "Fortuna",
      formula: diurno ? "ASC + Lua − Sol" : "ASC + Sol − Lua",
      grau:    fortuna,
    },
    {
      id:      "espirito",
      nome:    "Espírito (Daimon)",
      formula: diurno ? "ASC + Sol − Lua" : "ASC + Lua − Sol",
      grau:    espirito,
    },
    {
      id:      "eros",
      nome:    "Eros",
      // Paulus Alexandrinus: Vênus regente — usa Espírito (não Sol) como referência
      formula: diurno ? "ASC + Vênus − Espírito" : "ASC + Espírito − Vênus",
      grau:    normalizeDeg(diurno
        ? asc + venus - espirito
        : asc + espirito - venus),
    },
    {
      id:      "necessidade",
      nome:    "Necessidade (Ananke)",
      // Paulus Alexandrinus: Mercúrio regente — usa Mercúrio, não Saturno
      formula: diurno ? "ASC + Fortuna − Mercúrio" : "ASC + Mercúrio − Fortuna",
      grau:    normalizeDeg(diurno
        ? asc + fortuna - mercurio
        : asc + mercurio - fortuna),
    },
    {
      id:      "coragem",
      nome:    "Coragem (Andreia)",
      // Paulus Alexandrinus: diurno = Fortuna − Marte (não Marte − Fortuna)
      formula: diurno ? "ASC + Fortuna − Marte" : "ASC + Marte − Fortuna",
      grau:    normalizeDeg(diurno
        ? asc + fortuna - marte
        : asc + marte - fortuna),
    },
    {
      id:      "vitoria",
      nome:    "Vitória (Nike)",
      // Paulus Alexandrinus / Chris Brennan / Codex: diurno = Júpiter − Espírito
      formula: diurno ? "ASC + Júpiter − Espírito" : "ASC + Espírito − Júpiter",
      grau:    normalizeDeg(diurno
        ? asc + jupiter - espirito
        : asc + espirito - jupiter),
    },
    {
      id:      "nemesis",
      nome:    "Nemesis",
      formula: diurno ? "ASC + Fortuna − Saturno" : "ASC + Saturno − Fortuna",
      grau:    normalizeDeg(diurno
        ? asc + fortuna - saturno
        : asc + saturno - fortuna),
    },
    {
      id:      "infortunio",
      nome:    "Infortúnio",
      formula: diurno ? "ASC + Marte − Saturno" : "ASC + Saturno − Marte",
      grau:    normalizeDeg(diurno
        ? asc + marte - saturno
        : asc + saturno - marte),
    },
    {
      id:      "morte",
      nome:    "Morte",
      // Fórmula fixa (sem distinção diurno/noturno) — padrão acadêmico Astro-Seek
      formula: "ASC + Cúspide Casa 8 − Lua",
      grau:    normalizeDeg(asc + cuspideCasa8 - lua),
    },
  ];

  const lotes = lotesDef.map((l) => {
    const posicao = degToSigno(l.grau);
    return {
      id:           l.id,
      nome:         l.nome,
      formula:      l.formula,
      grauAbsoluto: l.grau,
      posicao,
      posicaoStr:   formatPos(posicao),
    };
  });

  return { diurno, lotes };
}

// ─── Exportação ───────────────────────────────────────────────────────────────

if (typeof module !== "undefined" && module.exports) {
  module.exports = { calcularLotes, isDiurno, normalizeDeg, degToSigno, formatPos };
}
