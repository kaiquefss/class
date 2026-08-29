class Pessoa {
    #nome;
    idade;
    cpf;

    constructor(nome, idade, cpf){
        this.#nome = nome;
        this.idade = idade;
        this.cpf = cpf;
    }
    get nome(){
        return this.#nome
    }
    set nome(valor){
        if(valor == "Kaique"){
            throw new Error('INVALIDO')
        }
    }

    apresentar(){
        console.log(`Olá meu nome é ${this.nome}, tenho ${this.idade} anos, e meu CPF É ${this.cpf}`)
    }
}

const p1 = new Pessoa("Kaique", 27, "394.484.999-33")
console.log(p1.nome)
