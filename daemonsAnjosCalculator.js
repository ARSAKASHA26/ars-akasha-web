/**
 * daemonsAnjosCalculator.js — Cálculo dos 2 Anjos + 6 Daemons · Sistema Ars Akasha
 *
 * Metodologia: metodo-estudo-6-daemons-2-anjos.md (07-modelos-padroes/)
 *
 * Reutiliza isDiurno() de lotesCalculator.js (não recria a lógica de sect).
 *
 * Entrada:
 *   mapaNatal = {
 *     diaNasc, mesNasc,                    — data de nascimento (sem ano)
 *     asc, sol, lua, mercurio, venus,
 *     marte, jupiter, saturno,             — graus absolutos 0–360°
 *     mc,                                  — Meio do Céu
 *     casas: [c1, c2, ..., c12],           — cúspides das 12 casas (array 0-indexed)
 *   }
 *
 * Saída:
 *   {
 *     diurno: boolean,
 *     anjoNatal: { anjo, ehGenio },
 *     anjoOperacional: { anjo, pontoUsado, grauUsado },
 *     daemons: [
 *       { area, daemon, pontoUsado, grauUsado, motivo },
 *       ...  (6 entradas)
 *     ]
 *   }
 */

// ─── Dependências ─────────────────────────────────────────────────────────────

if (typeof isDiurno === "undefined" && typeof require !== "undefined") {
  const { isDiurno: _id, normalizeDeg: _nd } = require("./lotesCalculator");
  global.isDiurno    = _id;
  global.normalizeDeg = _nd;
}
if (typeof buscarAnjoPorData === "undefined" && typeof require !== "undefined") {
  const db = require("./anjosDatabase");
  global.buscarAnjoPorData = db.buscarAnjoPorData;
  global.buscarAnjoPorGrau = db.buscarAnjoPorGrau;
}
if (typeof buscarDaemonPorGrau === "undefined" && typeof require !== "undefined") {
  const db = require("./daemonsDatabase");
  global.buscarDaemonPorGrau = db.buscarDaemonPorGrau;
  global.buscarParDaemon     = db.buscarParDaemon;
}

// ─── As 6 áreas e seus pontos prioritários ───────────────────────────────────
//
// Metodologia: para cada área, tentamos os pontos na ordem indicada.
// Usamos o primeiro ponto disponível no mapa (grau > 0 indica dado presente).
// A lógica é: grau do ponto → decanato → daemon (diurno ou noturno pela sect).

const AREAS = [
  {
    id:      "amor",
    nome:    "Amor",
    pontos:  ["venus", "lua", "casa5"],
    motivo:  "Vênus, Lua e Casa 5 regem amor, desejo e vínculos afetivos.",
  },
  {
    id:      "trabalho",
    nome:    "Trabalho",
    pontos:  ["mc", "sol", "saturno", "casa10"],
    motivo:  "MC, Sol e Saturno definem vocação, carreira e reputação pública.",
  },
  {
    id:      "saude",
    nome:    "Saúde Simbólica e Vitalidade",
    pontos:  ["asc", "sol", "lua", "saturno", "casa6"],
    motivo:  "Ascendente, Sol e Casa 6 regem corpo, rotina e vitalidade simbólica.",
  },
  {
    id:      "casamento",
    nome:    "Casamento e Parcerias",
    pontos:  ["venus", "lua", "casa7"],
    motivo:  "Casa 7 e Vênus regem parcerias formais e vínculos profundos.",
  },
  {
    id:      "prosperidade",
    nome:    "Prosperidade Financeira",
    pontos:  ["jupiter", "venus", "sol", "casa2"],
    motivo:  "Júpiter, Vênus e Casa 2 regem abundância e recursos materiais.",
  },
  {
    id:      "protecao",
    nome:    "Proteção",
    pontos:  ["asc", "marte", "saturno", "jupiter", "casa12"],
    motivo:  "Ascendente, Marte e Casa 12 regem defesa, limites e campo espiritual.",
  },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

/**
 * Extrai o grau de um ponto do mapa (incluindo cúspides de casas).
 * Retorna null se o ponto não existir no mapa.
 * @param {string} ponto — id do ponto (ex.: "venus", "casa5")
 * @param {object} mapa
 * @returns {number|null}
 */
function _extrairGrau(ponto, mapa) {
  if (ponto.startsWith("casa")) {
    const num = parseInt(ponto.replace("casa", ""), 10);
    if (mapa.casas && mapa.casas.length >= 12) {
      return mapa.casas[num - 1]; // array 0-indexed, casa1 = índice 0
    }
    return null;
  }
  const val = mapa[ponto];
  return (val !== undefined && val !== null) ? val : null;
}

/**
 * Para uma área, retorna o primeiro ponto disponível no mapa e seu grau.
 * @param {string[]} pontosOrdem
 * @param {object}   mapa
 * @returns {{ ponto: string, grau: number }|null}
 */
function _melhorPonto(pontosOrdem, mapa) {
  for (const p of pontosOrdem) {
    const g = _extrairGrau(p, mapa);
    if (g !== null && g >= 0) return { ponto: p, grau: g };
  }
  return null;
}

// ─── Anjo operacional: ponto mais forte do mapa ───────────────────────────────
//
// Prioridade: Sol > Lua > Ascendente > MC > Júpiter > Saturno > Vênus > Marte
// (segue a metodologia: primeiro os luminares e ângulos, depois planetas)

const ORDEM_ANJO_OPERACIONAL = ["sol", "lua", "asc", "mc", "jupiter", "saturno", "venus", "marte"];

// ─── Cálculo principal ────────────────────────────────────────────────────────

/**
 * Calcula os 2 Anjos e os 6 Daemons de um mapa natal.
 *
 * @param {{
 *   diaNasc:   number,
 *   mesNasc:   number,
 *   asc:       number,
 *   sol:       number,
 *   lua:       number,
 *   mercurio:  number,
 *   venus:     number,
 *   marte:     number,
 *   jupiter:   number,
 *   saturno:   number,
 *   mc:        number,
 *   casas:     number[],
 * }} mapaNatal
 *
 * @returns {{
 *   diurno:           boolean,
 *   anjoNatal:        { anjo: object|null, ehGenio: boolean },
 *   anjoOperacional:  { anjo: object|null, pontoUsado: string, grauUsado: number },
 *   daemons:          Array<{ area, daemon, pontoUsado, grauUsado, motivo }>,
 * }}
 */
function calcularDaemonsAnjos(mapaNatal) {
  const { diaNasc, mesNasc, sol, asc } = mapaNatal;

  // Sect do mapa
  const diurno = isDiurno(sol, asc);

  // ── Anjo Natal (por data de nascimento) ─────────────────────────────────────
  const anjoNatal = buscarAnjoPorData(diaNasc, mesNasc);

  // ── Anjo Operacional (pelo ponto astrológico mais forte) ────────────────────
  let anjoOpPonto = null;
  let anjoOpGrau  = null;
  for (const p of ORDEM_ANJO_OPERACIONAL) {
    const g = _extrairGrau(p, mapaNatal);
    if (g !== null && g >= 0) {
      anjoOpPonto = p;
      anjoOpGrau  = g;
      break;
    }
  }
  const anjoOperacional = {
    anjo:       anjoOpPonto ? buscarAnjoPorGrau(anjoOpGrau) : null,
    pontoUsado: anjoOpPonto,
    grauUsado:  anjoOpGrau,
  };

  // ── Os 6 Daemons ────────────────────────────────────────────────────────────
  // Regra de não-repetição: se o mesmo daemon já foi atribuído a outra área,
  // tenta o segundo ponto da área; se não houver, busca o daemon do decanato
  // oposto (dia↔noite no mesmo grau).

  const usados = new Set(); // números dos daemons já alocados
  const daemons = [];

  for (const area of AREAS) {
    let daemon    = null;
    let pontoUsado = null;
    let grauUsado  = null;

    // Tenta pontos em ordem até achar um daemon não repetido
    for (const p of area.pontos) {
      const g = _extrairGrau(p, mapaNatal);
      if (g === null || g < 0) continue;
      const d = buscarDaemonPorGrau(g, diurno);
      if (!d) continue;
      if (!usados.has(d.numero)) {
        daemon    = d;
        pontoUsado = p;
        grauUsado  = g;
        break;
      }
    }

    // Se todos os pontos geraram daemon repetido, usa o par dia/noite do primeiro
    if (!daemon) {
      const g = _extrairGrau(area.pontos[0], mapaNatal);
      if (g !== null) {
        const principal = buscarDaemonPorGrau(g, diurno);
        if (principal) {
          const par = buscarParDaemon(principal);
          if (par && !usados.has(par.numero)) {
            daemon    = par;
            pontoUsado = area.pontos[0];
            grauUsado  = g;
          }
        }
      }
    }

    if (daemon) usados.add(daemon.numero);

    daemons.push({
      area:       area.id,
      areaNome:   area.nome,
      daemon,
      pontoUsado,
      grauUsado,
      motivo:     area.motivo,
    });
  }

  return { diurno, anjoNatal, anjoOperacional, daemons };
}

// ─── Exportação ───────────────────────────────────────────────────────────────

if (typeof module !== "undefined" && module.exports) {
  module.exports = { calcularDaemonsAnjos, AREAS, ORDEM_ANJO_OPERACIONAL };
}
