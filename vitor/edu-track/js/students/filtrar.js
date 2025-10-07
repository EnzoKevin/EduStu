import { buscar } from "../storage/storage.js";

/**
 * Filtra alunos com base no nome e no curso.
 *
 * @author Márcio
 * @version 1.0.3
 * @since 1.0.0 (22/09/2025)
 *
 * @param {string} [nome=''] - Parte do nome a ser filtrada
 * @param {string} [curso=''] - Parte do curso a ser filtrada
 * @returns {{ success: boolean, data: Array<Object> }} Lista de alunos filtrados
 *
 * @example
 * filtrarNomeCurso('Marcio', 'ADS');
 * // { success: true, [{ nome: 'Marcio', curso: 'ADS' }] }
 */
export function filtrarNomeCurso(nome = "", curso = "") {
  try {
    // Busca todos os alunos salvos no storage
    const result = buscar("alunos"); // 🔹 mantém o mesmo nome usado em adicionarAluno

    // Valida se veio algo válido
    if (!result || !result.status || !Array.isArray(result.data)) {
      console.warn("Nenhum dado encontrado ou formato inválido");
      return { success: false, data: [] };
    }

    // Normaliza os filtros
    const nomeFiltro =
      typeof nome === "string" ? nome.trim().toLowerCase() : "";
    const cursoFiltro =
      typeof curso === "string" ? curso.trim().toLowerCase() : "";

    // Filtra os alunos
    const data = result.data.filter((item) => {
      const nomeOk =
        !nomeFiltro ||
        String(item.nome ?? "")
          .toLowerCase()
          .includes(nomeFiltro);
      const cursoOk =
        !cursoFiltro ||
        String(item.curso ?? "")
          .toLowerCase()
          .includes(cursoFiltro);
      return nomeOk && cursoOk;
    });

    return { success: true, data };
  } catch (error) {
    console.error("Erro ao filtrar dados:", error.message);
    return { success: false, data: [] };
  }
}
