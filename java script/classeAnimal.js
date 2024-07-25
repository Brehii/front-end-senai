
class Animal {
     constructor(nome) {
      this.nome = nome; 
    }
  

    fazerBarulho() {
      console.log('Fazendo barulho genérico');
    }
  }
  

  class Cachorro extends Animal {

    constructor(nome, raca) {
      super(nome);
      this.raca = raca;
    }
  
    latir() {
      console.log('Au au!');
    }
  
    fazerBarulho() {
      console.log('Au au!');
    }
  }
  
  let meuCachorro = new Cachorro('Rex', 'Labrador');
  meuCachorro.latir()
  meuCachorro.fazerBarulho()
  