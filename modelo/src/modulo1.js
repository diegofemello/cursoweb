const atributoNaoExportado = 'teste'
export const nome = 'Diego'
export const sobrenome = 'Mello'
export const idade = 24

function soma(x, y){
    return x + y
}

export default class Pessoa{
    constructor(nome, sobrenome = '', idade = 0){
        this.nome = nome;
        this.sobrenome = sobrenome
        this.idade = idade;
    }
}

export { Pessoa, soma}