import Mamifero from '../models/Mamifero.js'

class Pessoa extends Mamifero {
    inventario;
    constructor(nome) {
        super(nome);   
        this.inventario = [];
    }
    ganharItem(item) {
        this.inventario.push(item);
    }

    trocarItem(meuItem, itemDesejado, outraPessoa) {
        if (!this.inventario.includes(meuItem)) {
            console.log(`${this.nome} não tem o item "${meuItem}" para trocar!`);
            return;
        }

        if (!outraPessoa.inventario.includes(itemDesejado)) {
            console.log(`${outraPessoa.nome} não tem o item "${itemDesejado}" para trocar!`);
            return;
        }

        const meuIndice = this.inventario.indexOf(meuItem);
        this.inventario.splice(meuIndice, 1);

        const outroIndice = outraPessoa.inventario.indexOf(itemDesejado);
        outraPessoa.inventario.splice(outroIndice, 1);

        this.inventario.push(itemDesejado);
        outraPessoa.inventario.push(meuItem);

        console.log(`Troca realizada com sucesso entre ${this.nome} e ${outraPessoa.nome}!`);
        console.log(`"${meuItem}" por "${itemDesejado}".`);
    }

    exibirInventario() {
        console.log(`Mochila de ${this.nome}:`, this.inventario);
    }

    emitirSom() {
        console.log('OBRIGADO PELA TROCA !');
    }
}

export default Pessoa;
