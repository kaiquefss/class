import Mamifero from "./Mamifero";

class Pessoa extends Mamifero {
    foragido;
    constructor(nome, peso, idade){
        super(nome, peso, idade);
        this.foragido = 0;
    }

    emitirSom(){
        console.log('Boa noite SENAI')
    }
    
    comer(){
        console.log('Essa pizza vai me engordar 1kg')
        this.peso += 1;
    }

    dormir(){
        console.log('Estou indo dormir')
    }

    matar(){
        this.foragido += 1
        console.log('VC ATINGIU 1 ESTRELA DE FORAGIDO')
    }
}

export default Pessoa