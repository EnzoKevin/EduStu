// script.js
import { adicionarAluno } from "./students/adicionar.js";
import { buscar, salvar } from "./storage/storage.js";
import { filtrarNomeCurso } from "./students/filtrar.js";

document.addEventListener("DOMContentLoaded", () => {
  const tbody = document.getElementById("studentsTableBody");
  const FiltroBtn = document.getElementById("Filtro");

  FiltroBtn.addEventListener("click", () => {
    const NomeInput = document.getElementById("Filter").value.trim();
    const CursoInput = document.getElementById("FilterCurso").value.trim();

    function renderTable() {
      tbody.innerHTML = "";
      const result = filtrarNomeCurso(NomeInput, CursoInput);
      console.log(result);
      const alunos = result ? result.data : [];

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
});
