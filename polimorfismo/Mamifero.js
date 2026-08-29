class Mamifero {
    nome;
    peso;

    constructor(nome, peso){
        this.nome = nome;
        this.peso = peso; 
    }

    emitirSom(){
        throw new error ('Abstration')
    }
}

class Gato extends Mamifero {
    constructor(nome, peso){
        super(nome, peso);
    }

    emitirSom(){
        console.log('MIAUUUU')
    }
}
class Cachorro extends Mamifero {
    constructor(nome, peso){
       super(nome, peso);

    }

    emitirSom(){
        console.log('AUAUAUAUUAU')
    }
}

const g1 = new Gato ('Rogerinho', 30);
g1.emitirSom();
const c1 = new Cachorro ('DOGUERA', 50)
c1.emitirSom();