class Pai {
    nome;
    idade;

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;

    }
    apresentar(){
        console.log(`meu nome é ${this.nome}, e tenho ${this.idade} anos`)
    }
}

class Filho extends Pai {
    escola;
    constructor(nome,idade,escola){
        super(nome,idade)
        this.escola = escola;
    }

    apresentar(){
        console.log(`MEU NOME É ${this.nome}`)
    }
}
const p1 = new Pai("Gil", 64 )
const f1 = new Filho("Kaique", 27, "Senai")


apresentar(f1, p1);