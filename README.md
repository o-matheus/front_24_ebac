# Módulo 24 - POO Java Script

## Menu 
[Aula 1 - Conheça a orientação a objetos ](#aula-1--conheça-a-orientação-a-objetos)  
[Aula 2 - Criando objetos ](#aula-2--cria-objetos)  
[Aula - ]()  
[Aula - ]()  
[Aula - ]()  
[Aula - ]()  
[Aula - ]()  

## Aula 1 – Conheça a orientação a objetos

### Objetivos da aula

Nesta primeira aula do módulo, os principais objetivos foram:

* Compreender os conceitos fundamentais da Programação Orientada a Objetos (POO);
* Identificar e explicar os três pilares da POO: **polimorfismo**, **herança** e **encapsulamento**;
* Conceituar a **abstração** e entender sua importância no desenvolvimento de software orientado a objetos.

---

### Os pilares da Programação Orientada a Objetos

#### 🌀 Polimorfismo

O **polimorfismo** se refere à capacidade de diferentes objetos responderem de formas distintas a uma mesma ação. Em outras palavras, objetos distintos podem compartilhar o mesmo nome de método, mas cada um executará esse método de forma personalizada. É como dizer: “fazer a mesma coisa de maneiras diferentes”.

#### 🧬 Herança

A **herança** permite que um objeto (ou classe) herde propriedades e comportamentos de outro. Isso facilita o reuso de código, promovendo uma estrutura onde características comuns são centralizadas em entidades “mãe”, enquanto objetos “filhos” herdam e estendem esse comportamento. Exemplo: um notebook e um desktop são “computadores”, portanto herdam os atributos e métodos de um computador.

#### 🔐 Encapsulamento

O **encapsulamento** trata do controle de acesso às informações de um objeto. Ou seja, ele determina o que pode ser acessado ou modificado de fora da estrutura. Embora o professor não tenha detalhado o uso de modificadores como `private` ou `public` nesta etapa, a ideia já foi apresentada como a limitação e proteção dos dados internos.

---

### Entendendo a Abstração

A **abstração** nos ajuda a identificar o que é essencial em um objeto e a ignorar os detalhes irrelevantes. O professor utilizou o exemplo de um "computador" para explicar esse conceito. Mesmo que ele possa se apresentar como notebook, desktop ou até mesmo um smartphone, todos compartilham atributos em comum:

* **Atributos (o que o objeto tem):** memória RAM, armazenamento, CPU, GPU, sistema operacional, botão de ligar/desligar, etc.
* **Métodos (o que o objeto faz):** ligar, desligar, executar programa, processar dados, entre outros.

---

### Função construtora, classe e instância

O professor introduziu a ideia de **função construtora**, que em JavaScript cumpre o papel equivalente ao de **classe** em outras linguagens. Essa função define os atributos e métodos que um objeto terá.

* A **classe** é como um molde (ex: `Computador`);
* Os **objetos herdados** são especializações (ex: `Notebook`, `Desktop`);
* A **instância** é um objeto específico criado a partir da herança ou diretamente da classe (ex: `MeuNotebookPessoal`).

No JavaScript, esse processo pode acontecer com funções construtoras e, mais recentemente, com a palavra-chave `class`.

---

### Exemplo com Pokémon

Para reforçar o entendimento de classe, herança e instância, o professor apresentou um exemplo lúdico:

* A **classe** é `Pokemon`;
* A **herança** seria um tipo específico de Pokémon, como `Pikachu`;
* A **instância** é um Pokémon específico criado a partir da herança, como `const pikachuDoOeste = new Pikachu();`.

Além disso, foi apresentado um **método** associado à instância: `pikachuDoOeste.choqueDoTrovao();`, que representa uma ação executada pelo objeto.

---

### Notação ponto

Foi apresentado o conceito de **notação ponto**, muito comum em linguagens orientadas a objetos. Essa notação é usada para acessar atributos e métodos de uma instância. Exemplo:

```javascript
pikachuDoOeste.nome;
pikachuDoOeste.choqueDoTrovao();
```

---

### 🔍 Resumo da Aula 1

Nesta aula introdutória, mergulhamos nos conceitos iniciais da Programação Orientada a Objetos com JavaScript. Conhecemos os pilares fundamentais — **polimorfismo**, **herança** e **encapsulamento** —, e entendemos como a **abstração** nos ajuda a organizar melhor nosso pensamento em torno dos objetos.

Exploramos ainda os conceitos de **classe**, **herança** e **instância**, com exemplos práticos como “computadores” e “Pokémons”. Foi uma aula essencial para começar a estruturar nosso pensamento de forma mais organizada e modular no desenvolvimento com JavaScript.

## Aula 2 – Cria Objetos

### Objetivos da aula

Nesta aula, exploramos as formas de criar objetos em JavaScript. Os objetivos principais foram:

* Compreender a criação de objetos por meio da **notação literal**;
* Aprender a criar objetos por meio de **funções construtoras**;
* Praticar a criação de objetos com ambas as abordagens.

---

### Criação de objetos com notação literal

A forma mais direta de criar um objeto em JavaScript é utilizando a **notação literal**. Declaramos uma variável com `const`, atribuimos um objeto com `{}`, e dentro dele definimos pares de chave e valor.

Exemplo:

```javascript
const carro = {
  modelo: "Fiesta",
  fabricante: "Ford",
  anoModelo: 2020,
  anoFabricacao: 2019,
  acelerar: function () {
    console.log("VRUM!");
  }
};
```

* Os **atributos** são informações estáticas armazenadas no objeto (ex: `modelo`, `fabricante`).
* Os **métodos** são funções associadas ao objeto (ex: `acelerar`).

Para executar métodos ou acessar atributos, usamos a **notação ponto**:

```javascript
carro.acelerar(); // Executa o método
console.log(carro.modelo); // Acessa o atributo
```

Essa abordagem é prática para poucos objetos, mas se torna ineficiente quando precisamos criar vários com a mesma estrutura.

---

### Criação de objetos com função construtora

Para situações mais escaláveis, usamos **funções construtoras**, que funcionam como moldes de objetos. Por convenção, nomes de funções construtoras começam com letra **maiúscula**.

```javascript
function Carro(modelo, fabricante, anoModelo, anoFabricacao) {
  this.modelo = modelo;
  this.fabricante = fabricante;
  this.anoModelo = anoModelo;
  this.anoFabricacao = anoFabricacao;
  this.acelerar = function () {
    console.log("VRUM!");
  };
}
```

Nesta estrutura:

* Os parâmetros são passados durante a criação da instância;
* O `this` serve para associar cada valor à instância atual do objeto sendo criado.

A grande vantagem aqui é poder gerar vários objetos com uma única função base.

---

### Instanciando objetos com `new`

Para criar um objeto a partir da função construtora, usamos a palavra-chave **`new`**. Ela sinaliza ao JavaScript que queremos instanciar um novo objeto, e já cuida do retorno automático (sem precisar escrever `return` manualmente).

```javascript
const carro1 = new Carro("Fiesta", "Ford", 2020, 2019);
const carro2 = new Carro("Civic", "Honda", 2022, 2021);

carro2.acelerar(); // VRUM!
```

> 🧠 Dica importante: a função construtora retorna o novo objeto automaticamente quando usamos `new`.

---

### Execução no terminal com Node.js

Caso você deseje testar seu código diretamente no terminal usando Node.js, o comando é:

```bash
node nomeDoArquivo.js
```

Isso executará o arquivo JavaScript e exibirá o resultado no terminal.

Alternativamente, você pode criar um `index.html` e inserir o script JavaScript com a tag `<script>`, executando no navegador — embora essa abordagem envolva mais etapas.

---

### 🔍 Resumo da Aula 2

Aprendemos duas formas principais de criar objetos em JavaScript:

1. **Notação literal**: mais simples e rápida, recomendada para objetos pontuais;
2. **Função construtora**: mais robusta e reutilizável, ideal para criar muitos objetos semelhantes.

Reforçamos a diferença entre **atributos** (dados) e **métodos** (funções do objeto), o uso da palavra-chave `this`, a convenção de usar letra maiúscula para funções construtoras, e a importância da palavra-chave `new` para instanciar objetos corretamente.

Também vimos como testar nosso código com Node.js diretamente pelo terminal, o que facilita bastante o processo de desenvolvimento e depuração.
