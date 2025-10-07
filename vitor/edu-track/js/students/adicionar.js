import { buscar, salvar } from "../storage/storage.js";

/**
 * Adiciona um aluno a lista de alunos
 * 
 * Recebe os dados do estudante
 * 
 * @author victor <victor242206@gmail.com>
 * @version 1.0.0
 * @since 1.0.0 (04/09/2025)
 * @param {any} student - Valor a ser salvo
 * @returns {{ success: boolean, data: [Object] }} Status da operação e valor encontrado
 * @throws {Error} Caso o valor "student" seja vazio
 * 
 * @example
 * adicicionarAluno({name: 'Victor', idade: 18}); 
 * // { success: true, data: [{name: 'Victor', idade: 18}] }
 */

export function adicionarAluno(student) {
    if(student === null) {
        throw new Error('Valor inválido.')
    }

    let students = [];

    try {
        const result = buscar('alunos');
        if (result && result.success && Array.isArray(result.data)) {
            students = result.data;
        }
    } catch (err) {
        console.error("Erro ao buscar estudantes:", err);
    }


    students.push(student);

    salvar('alunos', students);
    
    return {success: true, data: students}
}

