import { adicionarAluno } from './adicionar.js';
import { gerarEstatistica } from './estatisticas.js';
import { buscarAlunos } from './buscar.js';
import { buscarAlunoPorNome } from './buscarNome.js';
import { filtrarNomeCurso } from './filtrar.js';
import { validarAluno } from './validar.js';

const Aluno = {
    adicionarAluno,
    gerarEstatistica,
    buscarAlunoPorNome,
    buscarAlunos,
    filtrarNomeCurso,
    validarAluno
};

export default Aluno;
