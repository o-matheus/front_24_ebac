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
        return _salario
    }
    this.setSalario = function (valor) {
        if (typeof valor === 'number')
            _salario = valor;
    }
    this.aumentoSalario = function () {
        const novoSalario = _salario * 1.1;
        _salario = novoSalario
    }

}

function Estagiario(nome) {
    Funcionario.call(this, nome, "Estagiario", 2000);

    this.aumentoSalario = function () {
        const novoSalario = this.getSalario() * 1.07;
        this.setSalario(novoSalario);
    }
}

const funcionario1 = new Funcionario("Maria", "dev front-end", 5000);
const funcionario2 = new Estagiario("Pedro");


funcionario1.aumentoSalario()
console.log(funcionario1.getSalario())

funcionario2.aumentoSalario()
console.log(funcionario2.getSalario())










