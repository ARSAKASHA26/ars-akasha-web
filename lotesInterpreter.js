/**
 * lotesInterpreter.js — Leitura estruturada dos 11 Lotes Herméticos
 * Sistema Ars Akasha · Astrologia Helenística
 *
 * Depende de:
 *   lotesCalculator.js → calcularLotes()
 *   lotesDatabase.js   → resolveLote()
 *
 * Uso:
 *   const resultado = interpretLotes(mapaNatal);
 *   console.log(resultado.lotes.fortuna.posicaoStr);  // → "Libra 04°22'"
 *   console.log(resultado.lotes.fortuna.ficha.funcao);
 *
 * O objeto mapaNatal deve ter:
 *   { asc, sol, lua, mercurio, venus, marte, jupiter, saturno }
 *   — todos em graus absolutos 0–360°
 *
 * Opcionalmente pode incluir:
 *   { nome, casas } — casas[n] = grau da cúspide da casa n (array 1-indexed ou objeto)
 */

// ─── Dependências (Node.js) ───────────────────────────────────────────────────

if (typeof calcularLotes === "undefined" && typeof require !== "undefined") {
  const calc = require("./lotesCalculator");
  global.calcularLotes  = calc.calcularLotes;
  global.normalizeDeg   = calc.normalizeDeg;
  global.degToSigno     = calc.degToSigno;
  global.isDiurno       = calc.isDiurno;
}
if (typeof resolveLote === "undefined" && typeof require !== "undefined") {
  const db = require("./lotesDatabase");
  global.resolveLote        = db.resolveLote;
  global.lotesFullDatabase  = db.lotesFullDatabase;
}

// ─── Determinação da casa de um lote ────────────────────────────────────────

/**
 * Determina em qual casa um grau absoluto cai, dado um array de cúspides.
 * cuspidesArray deve ser um array [casa1, casa2, ..., casa12] com graus absolutos.
 *
 * @param {number}   grauLote
 * @param {number[]} cuspidesArray — 12 elementos, índice 0 = Casa 1
 * @returns {number|null} número da casa (1–12) ou null se não fornecido
 */
function _determinarCasa(grauLote, cuspidesArray) {
  if (!cuspidesArray || cuspidesArray.length < 12) return null;

  for (let i = 0; i < 12; i++) {
    const inicio = cuspidesArray[i];
    const fim    = cuspidesArray[(i + 1) % 12];

    // Arco da casa (pode cruzar 0°)
    if (inicio <= fim) {
      if (grauLote >= inicio && grauLote < fim) return i + 1;
    } else {
      // Casa cruza 0° (ex.: 350° → 20°)
      if (grauLote >= inicio || grauLote < fim) return i + 1;
    }
  }
  return null;
}

// ─── Entrada principal ────────────────────────────────────────────────────────

/**
 * Interpreta os 11 Lotes Herméticos de um mapa natal.
 *
 * @param {{
 *   nome?:    string,
 *   asc:          number,
 *   sol:          number,
 *   lua:          number,
 *   mercurio:     number,
 *   venus:        number,
 *   marte:        number,
 *   jupiter:      number,
 *   saturno:      number,
 *   cuspideCasa8: number,
 *   casas?:       number[],  — array[12] com graus das cúspides (opcional)
 * }} mapaNatal
 *
 * @returns {{
 *   nome:   string,
 *   sect:   "Diurno"|"Noturno",
 *   lotes:  { [id]: { id, nome, posicaoStr, grauAbsoluto, casa, formula, ficha } },
 *   resumo: Array<{ lote, posicao, casa, funcao }>
 * }}
 */
function interpretLotes(mapaNatal) {
  const { nome, casas } = mapaNatal;

  // Calcular os 11 lotes
  const { diurno, lotes: lotesCalc } = calcularLotes(mapaNatal);

  // Montar o objeto de resultado enriquecido
  const lotesResultado = {};

  for (const lote of lotesCalc) {
    const ficha = resolveLote(lote.id);
    const casa  = _determinarCasa(lote.grauAbsoluto, casas || null);

    lotesResultado[lote.id] = {
      id:           lote.id,
      nome:         lote.nome,
      posicaoStr:   lote.posicaoStr,
      grauAbsoluto: lote.grauAbsoluto,
      posicao:      lote.posicao,
      formula:      lote.formula,
      casa:         casa ? `Casa ${casa}` : null,
      ficha:        ficha || null,
    };
  }

  // Resumo tabular
  const resumo = lotesCalc.map((l) => ({
    lote:    l.nome,
    posicao: l.posicaoStr,
    casa:    lotesResultado[l.id].casa,
    funcao:  (resolveLote(l.id) || {}).eixoSimbolico || "",
  }));

  return {
    nome:   nome || "Cliente",
    sect:   diurno ? "Diurno" : "Noturno",
    diurno,
    lotes:  lotesResultado,
    resumo,
  };
}

// ─── Exportação ───────────────────────────────────────────────────────────────

if (typeof module !== "undefined" && module.exports) {
  module.exports = { interpretLotes };
}
