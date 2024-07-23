class pessoa {
    constructor(nome, idade, profissao) {
    this.nome = nome
    this.idade = idade
    this.profissao = profissao
}
cumprimentar() {
    console.log(`Olá meu nome é ${this.nome}, tenho ${this.idade} anos e sou ${this.profissao}.`)
   }
}

const pessoa1 = new pessoa('ana', 30, 'engenheira')

pessoa1.cumprimentar();
