import Gato from './models/Gato.js';
const statusCarinhos = []
const g1 = new Gato('Rogerinho', 30, 2);   

g1.apresentar();
g1.emitirSom();
g1.dormir();
g1.comer(5);
g1.acariciar(20);
g1.acariciar(20);

statusCarinhos.push(g1.consultar());

console.log(`STATUS: ${statusCarinhos[0]} CARINHOS.`);
console.log(`O GATO ACABOU DE SE ALIMENTAR E AGORA ESTA PESANDO ${g1.peso} KG.`);
