// A classe criada o partir da abstração vai ser o automovel. O mesmo vai possuir marca, modelo, motor, combustivel, consume.
function Carro(marca, modelo, motor, combustivel, consumo) {
    this.marca = marca;
    this.modelo = modelo;
    this.motor = motor;
    this.combustivel = combustivel;
    this.consumo = consumo;
    this.acelerar = function acelerar() {
        console.log("Vrum Vrum")
    }
}
function CarroPopular(marca, modelo) {
    Carro.call(this, marca, modelo, 1.0, "flex", 10)

}

function CarroLuxo(marca, modelo) {
    Carro.call(this, marca, modelo, 4.0, "gasolina", 5)
}

const fordKa = new CarroPopular("Ford", "Ka")
const fiatUno = new CarroPopular("Fiat", "Uno")
const mercedesAmg = new CarroLuxo("Mercedes", "C63 - AMG")

console.log(fordKa);
console.log(fiatUno);
console.log(mercedesAmg);




