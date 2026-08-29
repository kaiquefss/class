class ContaAbstrata {
    numero;
    cliente;
    #saldo;

    constructor(numero, cliente){
        this.numero = numero
        this.cliente = cliente
        this.saldo = 0
    }

    depositar(valor){
        if(valor <= 0 ){
            throw new Error('Deposito mimimo de 1 real')
        }
        this.#saldo += valor;
    }

    sacar(valor){
        if(valor <= 0){
            throw new Error('Saldo insuficiente!')
        }
        this.#saldo -= valor
    }

    consultar(){
        return this.#saldo
    }

    transferir(valor, contaDestino){
        this.sacar(valor)
        contaDestino.depositar(valor)
    }
}

export default ContaAbstrata;