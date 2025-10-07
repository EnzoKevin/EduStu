// script.js
import { buscar, salvar } from "./storage/storage.js";
document.addEventListener("DOMContentLoaded", () => {
  const tbody = document.getElementById("studentsTableBody");

  function renderTable() {
    tbody.innerHTML = "";
    const result = buscar("alunos");
    const alunos = result.data;

    alunos.forEach((aluno, index) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${aluno.nome || "oi"}</td>
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
  renderTable();
});
