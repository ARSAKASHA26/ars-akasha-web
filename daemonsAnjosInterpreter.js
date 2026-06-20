/**
 * daemonsAnjosInterpreter.js — Interpretação dos 2 Anjos + 6 Daemons · Sistema Ars Akasha
 *
 * Combina:
 *   - daemonsAnjosCalculator.js → calcularDaemonsAnjos()
 *   - anjosDatabase.js          → fichas dos anjos
 *   - daemonsDatabase.js        → fichas dos daemons
 *
 * Função principal:
 *   interpretDaemonsAnjos(mapaNatal)
 *
 * Retorna objeto completo prontos para escrita da narrativa do produto
 * "Os 2 Anjos e os 6 Daemons" (R$ 150,90).
 */

// ─── Dependências ─────────────────────────────────────────────────────────────

if (typeof calcularDaemonsAnjos === "undefined" && typeof require !== "undefined") {
  const mod = require("./daemonsAnjosCalculator");
  global.calcularDaemonsAnjos = mod.calcularDaemonsAnjos;
}
if (typeof buscarAnjoPorData === "undefined" && typeof require !== "undefined") {
  const db = require("./anjosDatabase");
  global.buscarAnjoPorData = db.buscarAnjoPorData;
  global.buscarAnjoPorGrau = db.buscarAnjoPorGrau;
  global.ANJOS_DB          = db.ANJOS_DB;
}
if (typeof buscarDaemonPorGrau === "undefined" && typeof require !== "undefined") {
  const db = require("./daemonsDatabase");
  global.buscarDaemonPorGrau = db.buscarDaemonPorGrau;
  global.DAEMONS_DB          = db.DAEMONS_DB;
}

// ─── Nomes legíveis dos pontos ────────────────────────────────────────────────

const NOMES_PONTOS = {
  sol:        "Sol",
  lua:        "Lua",
  asc:        "Ascendente",
  mc:         "Meio do Céu",
  venus:      "Vênus",
  marte:      "Marte",
  jupiter:    "Júpiter",
  saturno:    "Saturno",
  mercurio:   "Mercúrio",
  casa2:      "Cúspide Casa 2",
  casa5:      "Cúspide Casa 5",
  casa6:      "Cúspide Casa 6",
  casa7:      "Cúspide Casa 7",
  casa10:     "Cúspide Casa 10",
  casa12:     "Cúspide Casa 12",
};

function _nomePonto(p) {
  return NOMES_PONTOS[p] || p;
}

function _formatGrau(g) {
  if (g === null || g === undefined) return "—";
  const signos = ["Áries","Touro","Gêmeos","Câncer","Leão","Virgem",
                  "Libra","Escorpião","Sagitário","Capricórnio","Aquário","Peixes"];
  const norm   = ((g % 360) + 360) % 360;
  const idx    = Math.floor(norm / 30);
  const grNoS  = Math.floor(norm - idx * 30);
  const min    = Math.round((norm - idx * 30 - grNoS) * 60);
  return `${signos[idx]} ${String(grNoS).padStart(2,"0")}°${String(min).padStart(2,"0")}'`;
}

// ─── Interpretação principal ──────────────────────────────────────────────────

/**
 * Interpreta os 2 Anjos e os 6 Daemons de um mapa natal.
 *
 * @param {{
 *   nome?:     string,
 *   diaNasc:   number,
 *   mesNasc:   number,
 *   asc:       number,   sol: number,    lua: number,
 *   mercurio:  number,   venus: number,  marte: number,
 *   jupiter:   number,   saturno: number, mc: number,
 *   casas:     number[],
 * }} mapaNatal
 *
 * @returns {{
 *   nome:             string,
 *   sect:             "Diurno"|"Noturno",
 *   anjoNatal: {
 *     ehGenio: boolean,
 *     anjo:    object|null,
 *   },
 *   anjoOperacional: {
 *     anjo:       object|null,
 *     pontoUsado: string,
 *     pontoNome:  string,
 *     grauUsado:  number,
 *     posicao:    string,
 *   },
 *   daemons: Array<{
 *     area:       string,
 *     areaNome:   string,
 *     daemon:     object|null,
 *     pontoUsado: string,
 *     pontoNome:  string,
 *     grauUsado:  number,
 *     posicao:    string,
 *     motivo:     string,
 *   }>,
 *   resumo: string,
 * }}
 */
function interpretDaemonsAnjos(mapaNatal) {
  const { nome } = mapaNatal;
  const calc = calcularDaemonsAnjos(mapaNatal);

  // ── Anjo Natal ──────────────────────────────────────────────────────────────
  const anjoNatal = {
    ehGenio: calc.anjoNatal.ehGenio,
    anjo:    calc.anjoNatal.anjo,
  };

  // ── Anjo Operacional ────────────────────────────────────────────────────────
  const op = calc.anjoOperacional;
  const anjoOperacional = {
    anjo:       op.anjo,
    pontoUsado: op.pontoUsado,
    pontoNome:  _nomePonto(op.pontoUsado),
    grauUsado:  op.grauUsado,
    posicao:    _formatGrau(op.grauUsado),
  };

  // ── 6 Daemons ───────────────────────────────────────────────────────────────
  const daemons = calc.daemons.map(d => ({
    area:       d.area,
    areaNome:   d.areaNome,
    daemon:     d.daemon,
    pontoUsado: d.pontoUsado,
    pontoNome:  _nomePonto(d.pontoUsado),
    grauUsado:  d.grauUsado,
    posicao:    _formatGrau(d.grauUsado),
    motivo:     d.motivo,
  }));

  // ── Resumo tabular ───────────────────────────────────────────────────────────
  const nomeCliente = nome || "Cliente";
  const sectStr     = calc.diurno ? "Diurno" : "Noturno";

  const linhasResumo = [
    `Mapa: ${nomeCliente} [${sectStr}]`,
    "",
    `ANJO NATAL:       ${anjoNatal.ehGenio
      ? "Gênio da Humanidade (data especial)"
      : anjoNatal.anjo
        ? `${anjoNatal.anjo.nome} (#${anjoNatal.anjo.numero})`
        : "Não identificado"}`,
    `ANJO OPERACIONAL: ${anjoOperacional.anjo
      ? `${anjoOperacional.anjo.nome} (#${anjoOperacional.anjo.numero})`
      : "Não identificado"} — via ${anjoOperacional.pontoNome} em ${anjoOperacional.posicao}`,
    "",
    "6 DAEMONS:",
    ...daemons.map(d =>
      `  ${d.areaNome.padEnd(28)} ${d.daemon
        ? `${d.daemon.nome.padEnd(20)} (#${String(d.daemon.numero).padStart(2,"0")}) — ${d.pontoNome} em ${d.posicao}`
        : "Não determinado"}`
    ),
  ];

  return {
    nome:            nomeCliente,
    sect:            sectStr,
    diurno:          calc.diurno,
    anjoNatal,
    anjoOperacional,
    daemons,
    resumo:          linhasResumo.join("\n"),
  };
}

// ─── Exportação ───────────────────────────────────────────────────────────────

if (typeof module !== "undefined" && module.exports) {
  module.exports = { interpretDaemonsAnjos };
}
