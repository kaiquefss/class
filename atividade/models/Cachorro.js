import Mamifero from "./Mamifero";

class Cachorro extends Mamifero {
    alegria;
    constructor(nome, peso, idade){
        super(nome, peso, idade);
        this.alegria = 0;
    }

    emitirSom(){
        console.log('AUAUAU')
    }
    
    comer(){
        console.log('Seu cachorro engordara 1KG')
        this.peso += 1;
    }

    dormir(){
        console.log('ZzZZzZZzz')
    }
    brincar(){
        this.alegria += 1;
        console.log('SEU CACHORRO ACABA DE GANHAR 1 PONTO DE ALEGRIA')

    }
}

export default Cachorro;

