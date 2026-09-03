import Gato from "./models/Gato.js";


const gato1 = new Gato(
    "Gatao",
    12,
    5,
)
gato1.apresentar()
gato1.acariciar(2)
gato1.comer()
gato1.dormir()
gato1.emitirSom()
gato1.acariciar(50)

console.log(`STATUS: ${gato1.consultar()}`);
