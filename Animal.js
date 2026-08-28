class Animal {
    nome;
    especie;
    idade;
    peso;

    constructor(nome, especie, idade, peso){
        this.nome = nome;
        this.especie = especie;
        this.idade = idade;
        this.peso = peso;
    }
    apresentar(){
        console.log(`O nome do animal é ${this.nome}, a especie é ${this.especie},tem ${this.idade} anos, e ele pesa ${this.peso}`)
    }
    comer(){
        console.log('JOGANDO COMIDA')
        this.peso += 1;
        console.log (`SEU ANIMAL ENGORDOU 1 KG, AGORA ESTA PESANDO ${this.peso} KG`);
    }

    aniversario(){
        this.idade +=1;
        console.log(`${this.nome} ficou mais velho, agora ele tem ${this.idade}`)

    }
}

class Mamifero extends Animal{

}

class Cachorro extends Mamifero{
    latir(){
        console.log('AUAUAU')
    }
}

class Gato extends Mamifero{
    
}

const a1 = new Animal('Bento','macaco',25,75)


a1.apresentar();
a1.comer();
a1.aniversario();