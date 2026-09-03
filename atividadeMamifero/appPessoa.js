import Pessoa from './models/Pessoa.js';

// Criando as duas pessoas
const p1 = new Pessoa('Kaique');
const p2 = new Pessoa('Larissa');

// Dando itens iniciais para cada um
p1.ganharItem('Notebook');
p1.ganharItem('Mouse');

p2.ganharItem('Teclado Mecânico');
p2.ganharItem('Fone Bluetooth');

console.log('--- INVENTÁRIO ANTES DA TROCA ---');
p1.exibirInventario();
p2.exibirInventario();

console.log('\n--- TENTANDO FAZER A TROCA ---');
// O Kaique inicia a troca: oferece o seu 'Mouse' pelo 'Teclado Mecânico' do Rodrigo
p1.trocarItem('Mouse', 'Teclado Mecânico', p2);

console.log('\n--- INVENTÁRIO DEPOIS DA TROCA ---');
p1.exibirInventario();
p2.exibirInventario();

p1.emitirSom();
p2.emitirSom();