import { buscar } from "../storage/storage.js";

/**
 * Busca o Valor no LocalStorage pelo nome da chave
 *
 * Recebe um Identificador
 * @author Márcio
 * @version 1.0.0
 * @since 1.0.0 (09/09/2025)
 * @param {string} key - Chave de identificação do valor
 *
 * @returns {Object} - estatisticas no formato { curso:  { anoLetivo: quantidade } }
 **/

export function gerarEstatistica(key) {
  try {
    const result = buscar("alunos");

    const success = result.status;
    const data = result.data;

    if (!success || !Array.isArray(data)) {
      throw new Error("Valor não encontrado!");
    }

    const estatisticas = {};

    data.forEach((aluno) => {
      const curso = aluno.curso || "Indefinido";
      const ano = aluno.anoLetivo || "Indefinido";

      if (!estatisticas[curso]) estatisticas[curso] = {};
      if (!estatisticas[curso][ano]) estatisticas[curso][ano] = 0;

      estatisticas[curso][ano] += 1;
    });

    return estatisticas;
  } catch (err) {
    console.error("Erro ao gerar estatísticas:", err.message);
    return {};
  }
}
