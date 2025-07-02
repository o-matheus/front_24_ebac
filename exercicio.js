// A classe criada o partir da abstração vai ser o automovel. O mesmo vai possuir motor, combustível, potencia.
function Carro(motor, combustivel ,potencia) {
    this.motor = motor;
    this.combustivel = combustivel;
    this.potencial = potencia;
    this.acelerar = function() {
        console.log("Vrum Vrum")
    }
}
function Moto(motor, combustivel ,potencia) {
    this.motor = motor;
    this.combustivel = combustivel;
    this.potencial = potencia;
    this.lancheRapido = function() {
        console.log("Furando sinal...Cortando faixa...")
    }
}

const fordKa = new Carro(1.0, "flex", 85);
const chevroletOpala = new Carro(4.1, "gasolina", 141)
const hondaBiz = new Moto(0.125, "flex", 9)




