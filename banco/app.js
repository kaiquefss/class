import Cliente from "./models/ContaCorrente.js"
import ContaCorrente from "./models/ContaCorrente.js"
import ContaPoupança from "./models/ContaPoupança.js"  

const cliente1 = new Cliente(
    "Kaique",
    "123.456.789-11",
    "kaique@gmail.com"
)
const cliente2 = new Cliente(
    "junao",
    "555.555.555.-73",
    "junao@gmail.com"
)
const cliente3 = new Cliente(
    "bento",
    "111.111.111-73",
    "bento@gmail.com"
)
const conta1 = new ContaCorrente(
    "123", "cliente2"
)
const conta2 = new ContaCorrente(
    "456", "cliente2"
)
const conta3 = new ContaCorrente(
    "456", "cliente2"
)

conta1.depositar(1000);
conta2.depositar(20);
conta3.depositar(20);

conta1.transferir(200, conta2)

console.log("o saldo da conta 01 R$" + conta1.consultar())
console.log("o saldo da conta 02 R$" + conta2.consultar())
console.log("o saldo da conta 03 R$" + conta3.consultar())