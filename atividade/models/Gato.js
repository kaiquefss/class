import Mamifero from "./Mamifero.js";

class Gato extends Mamifero {
    amizade;
    constructor(nome, idade,peso){
        super(nome, idade, peso);
        this.amizade = 0
    }
    apresentar(){
        console.log(`O nome do animal é ${this.nome}, ele pesa ${this.peso} KG,ele tem ${this.idade} anos`)
    }

    emitirSom(){
        console.log('MIAUUUU')
    }
    
    comer(){
        console.log (`SEU ANIMAL ENGORDOU 1 KG, AGORA ESTA PESANDO ${this.peso} KG`);
    }

    dormir(){
        console.log('PARTIU DORMIR ZzZZzZZzz')
    }

    acariciar(valor){
        if(valor <= 0 ){
            throw new Error('MINIMO 1 CARINHO')
        }
        this.amizade += valor;
    }
    consultar(){
        return this.amizade
    }
}

export default Gato