import Aluno from "./students/index.js";

console.log("Módulo carregado com sucesso!");

// Exemplo de uso do módulo Aluno
const novoAluno = {
  nome: "João Silva",
  registroMatricula: "20251234",
  telefone: "11999999999",
  anoLetivo: 2025,
  email: "",
  cpf: "12345678910",
  instituicao: "Fatec Itu",
  curso: "ADS",
};

// Adiciona o novo aluno e exibe o resultado no console
console.log("Novo Aluno: ", Aluno.adicionarAluno(novoAluno));

// Busca todos os alunos e exibe no console
console.log("Todos os Alunos: ", Aluno.buscarAlunos());

// Busca aluno por nome e exibe no console
console.log("Busca por Nome: ", Aluno.buscarAlunoPorNome("João Silva"));

// Estatísticas de alunos
console.log("Estatísticas de Alunos: ", Aluno.gerarEstatistica());

console.log("Filtro de Aluno", Aluno.filtrarNomeCurso("João Silva", "ADS"));

// Validação de dados do aluno
console.log("Validação Aluno: ", Aluno.validarAluno(novoAluno));
