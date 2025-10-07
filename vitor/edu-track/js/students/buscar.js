import { buscar } from '../storage/storage.js'

/**
 * Busca todos os alunos cadastrados
 * 
 * @author Márcio
 * @version 1.0.0 
 * @since 1.0.0 (22/09/2025) 
 * 
 * @returns {Object} Retorna um objeto com o status da operação e os dados dos alunos
 * 
 * @example 
 * buscarAlunos()
 * // {success: true, data: [{nome: 'Márcio', idade: 18}]}
**/
export function buscarAlunos() {

    try {
        const result = buscar('alunos');

        return { success: result.status, data: result.data };  

    } catch (err) {
        console.error("Erro ao buscar alunos:", err);
        return {students: false, data: []};
    }


    
}
