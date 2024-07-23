class car {
    constructor(marca, modelo, ano,) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    this.velocidade = 0
}

acelerar(){
    this.velocidade += 10;
    return `velocidade: ${this.velocidade} km/h`;
}

freiar() {
    this.velocidade -= 5;
    if (this.velocidade < 0) this.velocidade = 0
    return `velocidade: ${this.velocidade} Km/h`;
}
exibirInfor() {
    return `carro: ${this.marca} ${this.modelo} (${this.ano})`;
   }
}

const meuCarro = new car('Honda', 'Civic', 2021)
console.log(meuCarro.exibirInfor());
console.log(meuCarro.acelerar());
console.log(meuCarro.freiar());
