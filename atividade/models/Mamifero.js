    class Mamifero {
    nome;
    peso;
    idade;

    constructor(nome, peso, idade){
        this.nome = nome;
        this.peso = peso; 
        this.idade = idade
    }

    emitirSom(){
        throw new error ('Abstration')
    }

    comer(){
        throw new error ('Abstration')
    }

    dormir(){
        throw new error ('Abstration')
    }
}

export default Mamifero;