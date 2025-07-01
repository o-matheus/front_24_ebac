function Pessoa(nome) {
    this.nome = nome;
    this.dizOi = function dizOi() {
        console.log(this.nome + " diz olá.")
    }
}

function Funcionario(nome, cargo, salario) {
    this.nome = nome;
    this.cargo = cargo;
    this.salario = salario;
}

const pessoa1 = new Pessoa("Maria");
const funcionario1 = new Funcionario("Maria", "dev front-end", 5000);
pessoa1.dizOi();
console.log (pessoa1);

