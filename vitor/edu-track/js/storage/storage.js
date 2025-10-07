/**
 * Salva o Valor no LocalStorage e retorna um Statue e uma mensagem
 * 
 * Recebe valores de identificação e valor
 * 
 * @author Victor Alexandre <victor242206@gmail.com>
 * @version 1.0.0
 * @since 1.0.0 (02/09/2025)
 * @param {string} key - Chave de identificação do valor
 * @param {any} value - Valor a ser salvo
 * 
 * @throws {Error} - Se a chave for inválida
 * @throws {Error} - Se o valor for inválido
 * 
 * @returns {Object} - Objeto com o status e a mensagem
 * 
 * @example
 * save('names', 'Victor')
 * return: {status: true, message: 'Valor salvo com sucesso!'}
 * 
**/

export function salvar(key, value) {
    if(key.trim() === '' || key === null || key === undefined) {
        throw new Error('Chave inválida');
    }

    if(value === null || value === undefined) {
        throw new Error('Valor inválido');
    }

    localStorage.setItem(key, JSON.stringify(value));

    let storage = localStorage.getItem(key);

    return storage ? {status: true, message: 'Valor salvo com sucesso!'} : {status: false, message: 'Erro ao salvar o valor!'};
}


/**
 * Busca o Valor no LocalStorage pelo nome da chave
 * 
 * Recebe um Identificador
 * @author Victor Alexandre <victor242206@gmail.com>
 * @version 1.0.0
 * @since 1.0.0 (02/09/2025)
 * @param {string} key - Chave de identificação do valor    
 * 
 * @throws {Error} - Se a chave for inválida
 * 
 * @example
 * get('names')
 * return { status: true, message: 'Valor encontrado!', value: 'Victor' }
 * 
**/

export function buscar(key) {
    if(key.trim() === '' || key === null || key === undefined) {
        throw new Error('Chave inválida');
    }

    let storage = localStorage.getItem(key);

    return storage ? { status: true, message: 'Valor encontrado!', data: JSON.parse(storage) } : { status: false, message: 'Valor não encontrado!' };
}