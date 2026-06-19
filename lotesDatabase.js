/**
 * lotesDatabase.js — Banco interpretativo dos 8 Lotes Herméticos
 * Sistema Ars Akasha · Astrologia Helenística
 *
 * Schema definido pelo Mago HNS RE:
 *   nome            — nome oficial no sistema Ars Akasha
 *   regente         — planeta regente do lote
 *   funcao          — eixo simbólico e aplicação no estudo
 *   confiancaFonte  — nível de consenso das fontes canônicas ("alta" / "media" / "debate")
 *
 * Fontes verificadas: Chris Brennan (Hellenistic Astrology), Paulus Alexandrinus,
 *   Rhetorius/Holden, astro.com, astro-seek.com — verificação 19/06/2026.
 */

const lotesFullDatabase = {

  fortuna: {
    nome:           "Fortuna",
    regente:        "Lua",
    funcao:         "Corpo, saúde, vitalidade, destino material",
    confiancaFonte: "alta",
  },

  espirito: {
    nome:           "Espírito (Daimon)",
    regente:        "Sol",
    funcao:         "Propósito da alma, vocação, missão espiritual",
    confiancaFonte: "alta",
  },

  eros: {
    nome:           "Eros",
    regente:        "Vênus",
    funcao:         "Amor, desejo, atração, vínculos emocionais",
    confiancaFonte: "alta",
  },

  necessidade: {
    nome:           "Necessidade (Ananke)",
    regente:        "Mercúrio",
    funcao:         "Destino compulsório, eventos inevitáveis, limitações",
    confiancaFonte: "alta",
  },

  coragem: {
    nome:           "Coragem (Andreia)",
    regente:        "Marte",
    funcao:         "Iniciativa, capacidade de enfrentar adversidades",
    confiancaFonte: "alta",
  },

  vitoria: {
    nome:           "Vitória (Nike)",
    regente:        "Júpiter",
    funcao:         "Reconhecimento, conquistas, resultados positivos",
    confiancaFonte: "alta",
  },

  nemesis: {
    nome:           "Nemesis",
    regente:        "Saturno",
    funcao:         "Justiça do destino, consequência, equilíbrio kármico",
    confiancaFonte: "alta",
  },

  infortunio: {
    nome:           "Infortúnio",
    regente:        "Marte/Saturno",
    funcao:         "Lesão física, doença crônica, acusação, lugar de crise — ligado às Casas 6 e 12",
    confiancaFonte: "alta",
  },

  morte: {
    nome:           "Morte",
    regente:        "Lua/Casa 8",
    funcao:         "Crises profundas, risco físico, encerramento de ciclos — raramente morte literal, funciona mais como transformação radical",
    confiancaFonte: "alta",
  },

};

/**
 * Retorna a ficha de um lote pelo id.
 * @param {string} id
 * @returns {object|null}
 */
function resolveLote(id) {
  return lotesFullDatabase[id] || null;
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { lotesFullDatabase, resolveLote };
}
