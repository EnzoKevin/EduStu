/**
 * Valida os campos do formulário de aluno
 *
 * Recebe um Identificador
 * @author Márcio
 * @version 1.0.0
 * @since 1.0.0 (22/09/2025)
 *
 * @param {Object} aluno - dados do aluno
 * @returns {Object} { valido: boolean, erros: Object }
 * @example
 * validarAluno({
 *   nome: 'Marcio Correa',
 *   registroMatricula: '20251234',
 *   telefone: '11999999999',
 *   anoLetivo: 2025,
 *   email: 'marcio@mail.com',
 *   cpf: '12345678910',
 *   instituicao: 'Fatec Itu',
 *   curso: 'ADS'
 * });
 */

export function validarAluno(aluno) {
  const erros = [];

  // Nome
  if (!aluno.nome || aluno.nome.trim().length < 3) {
    erros.nome = true;
  }

  // Registro de matrícula
  if (!aluno.registroMatricula || aluno.registroMatricula.trim().length < 3) {
    erros.registroMatricula = true;
  }

  // Telefone
  if (!/^[0-9]{8,}$/.test(aluno.telefone || "")) {
    erros.telefone = true;
  }

  // Ano letivo
  if (!aluno.anoLetivo) {
    erros.anoLetivo = true;
  }

  // Email
  if (!aluno.email || !/^[\w.-]+@[\w.-]+\.[a-z]{2,}$/i.test(aluno.email)) {
    erros.email = true;
  }

  // CPF
  if (!/^[0-9]{11}$/.test(aluno.cpf || "")) {
    erros.cpf = true;
  }

  // Instituição
  if (!aluno.instituicao || aluno.instituicao.trim() === "") {
    erros.instituicao = true /* 'Instituição é obrigatória.' */;
  }

  // Curso
  if (!aluno.curso || aluno.curso.trim() === "") {
    erros.curso = true /* 'Curso é obrigatório.' */;
  }

  return {
    valido: Object.keys(erros).length === 0,
    erros,
  };
}
