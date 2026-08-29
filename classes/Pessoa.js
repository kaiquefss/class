class Pessoa {
    nome;
    idade;
    sexo;

    constructor(nome, idade, sexo){
        this.nome = nome;
        this.idade = idade;
        this.sexo = sexo;
    }

    apresentar(){
        console.log(`Olá meu nome é ${this.nome} e tenho ${this.idade} `)
    }
    falar(){
        console.log(`TUDO CERTO!`)
    }
}

const p1 = new Pessoa("Kaique", 27, "M");
const p2 = new Pessoa("Ana", 26, "F")
p1.apresentar();
p1.falar();
p2.apresentar();
p2.falar();

