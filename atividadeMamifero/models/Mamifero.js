class Mamifero {
    nome;
    peso;
    idade;

    constructor(nome, peso, idade){
        this.nome = nome;
        this.peso = peso;
        this.idade = idade;
    }

    emitirSom(){
        throw new Error ('Abstration')
    }

    
    dormir(){
        throw new Error ('Abstration')
    }
    
    comer(){
        throw new Error ('Abstration')
    }
}

export default Mamifero;