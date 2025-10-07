import { gerarEstatistica } from "./students/estatisticas.js";
document.addEventListener("DOMContentLoaded", () => {
  // Buscar estatísticas dos alunos
  const estatisticas = gerarEstatistica("alunos");

  // ===== Atualizar cards =====
  const totalAlunos = Object.values(estatisticas).reduce((total, cursos) => {
    return total + Object.values(cursos).reduce((sum, qnt) => sum + qnt, 0);
  }, 0);

  const totalCursos = Object.keys(estatisticas).length;

  const anosSet = new Set();
  Object.values(estatisticas).forEach((cursos) => {
    Object.keys(cursos).forEach((ano) => anosSet.add(ano));
  });
  const totalAnos = anosSet.size;

  document.querySelector(".stats-grid .card:nth-child(1) h1").textContent =
    totalAlunos;
  document.querySelector(".stats-grid .card:nth-child(2) h1").textContent =
    totalCursos;
  document.querySelector(".stats-grid .card:nth-child(4) h1").textContent =
    totalAnos;

  // ===== Atualizar gráfico de cursos =====
  const cursosContainer = document.querySelector(".charts .chart:first-child");
  cursosContainer.innerHTML = "<h3>🎓 Distribuição por Curso</h3>";

  Object.entries(estatisticas).forEach(([curso, anos]) => {
    const totalCurso = Object.values(anos).reduce((sum, qnt) => sum + qnt, 0);
    const percentual = ((totalCurso / totalAlunos) * 100).toFixed(1);

    const bar = document.createElement("div");
    bar.classList.add("bar");

    bar.innerHTML = `
      <span>${curso}</span>
      <div class="progress">
        <div class="fill" style="width: ${percentual}%;"></div>
      </div>
      <p>${percentual}% - ${totalCurso} aluno${totalCurso > 1 ? "s" : ""}</p>
    `;
    cursosContainer.appendChild(bar);
  });

  // ===== Atualizar gráfico de anos =====
  const anosContainer = document.querySelector(".charts .chart:nth-child(2)");
  anosContainer.innerHTML = "<h3>📆 Distribuição por Ano</h3>";

  const anosTotais = {};
  Object.values(estatisticas).forEach((cursos) => {
    Object.entries(cursos).forEach(([ano, qnt]) => {
      if (!anosTotais[ano]) anosTotais[ano] = 0;
      anosTotais[ano] += qnt;
    });
  });

  Object.entries(anosTotais).forEach(([ano, qnt]) => {
    const percentual = ((qnt / totalAlunos) * 100).toFixed(1);

    const bar = document.createElement("div");
    bar.classList.add("bar");

    bar.innerHTML = `
      <span>${ano}º ano</span>
      <div class="progress">
        <div class="fill" style="width: ${percentual}%;"></div>
      </div>
      <p>${percentual}% - ${qnt} aluno${qnt > 1 ? "s" : ""}</p>
    `;
    anosContainer.appendChild(bar);
  });
});
