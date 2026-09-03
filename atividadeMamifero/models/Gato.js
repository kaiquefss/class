import Mamifero from './Mamifero.js';
class Gato extends Mamifero {
    constructor(nome, peso, idade){
       super(nome, peso, idade);
       this.carinho = 0;
    }

    apresentar(){
        console.log(`Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e peso ${this.peso}kg.`);
    }

    emitirSom(){
        console.log('MIAUUUUUUUUUUU')
    }

    
    dormir(){
        console.log(`${this.nome} está dormindo.`);
    }
    
    comer(valor){
        if(valor <= 0 ){
            throw new Error('ALIMENTE PELO MENOS 1 VEZ O GATO')
        }
        this.peso += valor;
    }

    acariciar(valor){
        if(valor <= 0 ){
            throw new Error('VOCE DEVE ACARICIAR O GATO PELO MENOS 1 VEZ')
        }
        this.carinho += valor;
    }

    consultar(){
        return this.carinho
    }
}
export default Gato;