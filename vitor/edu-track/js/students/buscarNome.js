import { buscar } from '../storage/storage.js'

/**
 * Busca o Valor no LocalStorage pelo nome da chave
 * 
 * Recebe um Identificador
 * @author Márcio 
 * @version 1.0.0
 * @since 1.0.0 (09/09/2025)
 * @param {string} nome - Nome do aluno a ser buscado
 * 
 * @throws {Error} - Caso o valor buscado seja inválido ou não encontrado
 * 
 * @example
 * buscarAlunoPorNome('Márcio')
 * return [{ nome: 'Márcio', idade: 21, curso: 'ADS' }]
 * 
**/

export function buscarAlunoPorNome(nome = '') {
    try {
        const result = buscar('alunos');

        const data = result.data;
        
        if(!result.status || !Array.isArray(data)) {
            throw new Error('Valor não encontrado!');
        }

        const nomeMinusculo = nome.toLowerCase();

        return data.filter((aluno) => aluno.nome.toLowerCase().includes(nomeMinusculo));
    } catch (err) {
        console.error('Erro ao buscar aluno por nome:', err.message);
        return [];
    }

}