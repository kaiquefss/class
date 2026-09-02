import ContaAbstrata from "./ContaAbstrata.js";

class ContaPoupança extends ContaAbstrata{
    aplicarRendimento(percentual){
        const saldoAtual = this.consultar
        const rendimento = saldoAtual * (percentual / 100)
        this.depositar(rendimento)
    }
}

export default ContaPoupança;