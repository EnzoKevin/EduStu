// script.js
import { adicionarAluno } from "./students/adicionar.js";
import { buscar, salvar } from "./storage/storage.js";
import { validarAluno } from "./students/validar.js";

document.addEventListener("DOMContentLoaded", () => {
  const tbody = document.getElementById("studentsTableBody");
  const form = document.getElementById("formAluno");
  const modal = document.getElementById("modal");
  const addBtn = document.getElementById("addBtn");
  const cancelarBtn = document.getElementById("cancelarBtn");

  let IsOpen = false;
  console.log(buscar("alunos"));

  let editIndex = null;
  function abrirModal() {
    modal.classList.add("show");
    // opcional: focar o primeiro campo
    const first = document.getElementById("nome");
    if (first) first.focus();
  }

  function fecharModal() {
    modal.classList.remove("show");
    form.reset();
    editIndex = null;
  }

  function renderTable() {
    tbody.innerHTML = "";
    const result = buscar("alunos");
    const alunos = result && result.data ? result.data : [];

    alunos.forEach((aluno, index) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${aluno.nome || ""}</td>
        <td>${aluno.email || ""}</td>
        <td>${aluno.rm || ""}</td>
        <td>${aluno.cpf || ""}</td>
        <td>${aluno.numero || ""}</td>
        <td>${aluno.instituicao || ""}</td>
        <td>${aluno.ano || ""}</td>
        <td>${aluno.curso || ""}</td>
        <td>
        <div class="actions">
          <button class="btn azul edit" data-index="${index}">Editar</button>
          <button class="btn cinza delete" data-index="${index}">Excluir</button>
        </div>
        </td>
      `;
      tbody.appendChild(tr);
    });
  }

  // Abre o modal ao clicar em "Adicionar"
  addBtn.addEventListener("click", () => {
    form.reset();
    editIndex = null;
    IsOpen = true;
    abrirModal();
  });

  // Fecha modal
  cancelarBtn.addEventListener("click", fecharModal);

  // Clicar fora do modal fecha
  modal.addEventListener("click", (e) => {
    if (e.target === modal) fecharModal();
  });

  // Delegação de eventos na tabela (editar / excluir)
  tbody.addEventListener("click", (e) => {
    const alunos =
      buscar("alunos") && buscar("alunos").data ? buscar("alunos").data : [];

    if (btn.classList.contains("edit")) {
      editIndex = index;
      const aluno = alunos[index] || {};

      // Preenche os campos usando os ids dos inputs
      Object.keys(aluno).forEach((key) => {
        const el = document.getElementById(key);
        if (el) el.value = aluno[key];
      });

      abrirModal();
    }
    console.log(`pre save: ${alunos}`);
    if (btn.classList.contains("delete")) {
      alunos.splice(index, 1);
      save("alunos", alunos);
      renderTable();
    }
  });

  console.log(
    "antes da validação: ",
    nome,
    email,
    rm,
    cpf,
    numero,
    instituicao,
    ano,
    curso
  );

  /* Validação */

  // Submeter formulário (adicionar/editar)
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const rm = document.getElementById("rm").value.trim();
    const cpf = document.getElementById("cpf").value.trim();
    const numero = document.getElementById("numero").value.trim();
    const instituicao = document.getElementById("instituicao").value.trim();
    const ano = document.getElementById("ano").value;
    const curso = document.getElementById("curso").value.trim();

    const aluno = {
      nome: nome,
      email: email,
      registroMatricula: rm,
      cpf: cpf,
      telefone: numero,
      instituicao: instituicao,
      anoLetivo: ano,
      curso: curso,
    };

    console.log(`${(nome, email, rm, cpf, numero, instituicao, ano, curso)}`);
    const vali = validarAluno(aluno);

    console.log("Validação:", vali.erros);

    if (!vali.valido && IsOpen) {
      alert("Dados inválidos, verifique os campos e digite novamente.");

      if (vali.erros.nome)
        alert("Nome inválido: O nome deve ter pelo menos 3 caracteres.");
      if (vali.erros.email) alert("Email inválido: Email inválido.");
      if (vali.erros.cpf) alert("CPF inválido: CPF deve ter 11 números.");
      if (vali.erros.instituicao)
        alert("Instituição inválida: Instituição é obrigatória.");
      if (vali.erros.telefone)
        alert("Número inválido: Número deve ter pelo menos 8 dígitos.");
      if (vali.erros.anoLetivo)
        alert("Ano inválido: Ano letivo deve ser um número.");
      if (vali.erros.curso) alert("Curso inválido: Curso é obrigatório.");
      if (vali.erros.registroMatricula)
        alert(
          "Registro de matrícula inválido: Registro de matrícula inválido."
        );
    } else {
      const novoAluno = {
        nome: nome,
        email: email,
        rm: rm,
        cpf: cpf,
        numero: numero,
        instituicao: instituicao,
        ano: ano,
        curso: curso,
      };

      const result = buscar("alunos");
      const alunos = result && result.data ? result.data : [];

      if (novoAluno.nome !== null && vali) {
        alunos.push(novoAluno);
        salvar("alunos", alunos);
      } else {
        adicionarAluno(novoAluno);
      }

      fecharModal();
      renderTable();
    }
  });

  // Render inicial
  renderTable();
});
