function Pessoa(nome) {
    this.nome = nome;
    this.dizOi = function dizOi() {
        console.log(this.nome + " diz olá.")
    }
}

function Funcionario(nome, cargo, salario) {
    this.nome = nome;
    this.cargo = cargo;
    let _salario = salario;

    this.getSalario = function () {
        return `O salário de ${this.nome} é ${_Salario}`;
    }
    this.setSalario = function (valor) {
        if(typeof valor === 'number')
        _salario = valor;
    }

}

const pessoa1 = new Pessoa("Maria");
const funcionario1 = new Funcionario("Maria", "dev front-end", 5000);
pessoa1.dizOi();

funcionario1.setSalario(7000);
console.log(funcionario1.getSalario());


