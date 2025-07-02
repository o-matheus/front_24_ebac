# Módulo 24 - POO Java Script

## Menu 
[Aula 1 - Conheça a orientação a objetos ](#aula-1--conheça-a-orientação-a-objetos)  
[Aula 2 - Criando objetos ](#aula-2--cria-objetos)  
[Aula 3 - Verifique os tipos e instâncias ](#aula-3--verifique-os-tipos-e-instâncias)  
[Aula 4 - Acesso a atributos](#aula-4--acesso-a-atributos)  
[Aula 5 - Aplica a herança  ](#aula-5--aplica-a-herança)  
[Aula 6 - Aplique encapsulamento ](#aula-6--aplique-encapsulamento)  
[Aula 7 - Aplique o polimorfismo ](#aula-7--aplique-o-polimorfismo)  

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

## Aula 3 – Verifique os tipos e instâncias

### Objetivos da aula

Nesta aula, nos aprofundamos nas formas de identificar os tipos de dados em JavaScript, com os seguintes objetivos:

* Entender a verificação de tipos de dados com `typeof`;
* Aprender a verificar instâncias de objetos personalizados com `instanceof`;
* Explorar as distinções entre tipos primitivos e instâncias de objetos no JavaScript.

---

### Verificação de tipos com `typeof`

O professor iniciou a aula criando algumas variáveis simples para ilustrar os diferentes tipos de dados:

```javascript
const nome = "Gean";
const idade = 30;
const eMaiorDeIdade = true;
const conhecimentos = ["HTML", "CSS", "JavaScript"];
```

Depois, criou um objeto com esses dados:

```javascript
const pessoa = {
  nome: nome,
  idade: idade,
  eMaiorDeIdade: eMaiorDeIdade,
  conhecimentos: conhecimentos
};
```

Para verificar o tipo de dado armazenado em cada constante ou atributo, utilizamos a palavra-chave **`typeof`**, que retorna uma *string* indicando o tipo do valor.

Exemplos de uso:

```javascript
console.log(typeof nome);             // "string"
console.log(typeof idade);           // "number"
console.log(typeof eMaiorDeIdade);   // "boolean"
console.log(typeof conhecimentos);   // "object"
console.log(typeof pessoa);          // "object"
```

> 🧠 Importante: Mesmo que `conhecimentos` seja um array, e `pessoa` seja um objeto composto, o `typeof` retorna `"object"` para ambos. Isso acontece porque, no JavaScript, arrays são considerados um tipo especial de objeto — e o `typeof` não consegue fazer distinções mais específicas entre estruturas complexas.

---

### Limitações de `typeof`

Embora `typeof` funcione bem para tipos primitivos como `string`, `number` e `boolean`, ele se torna limitado quando lidamos com estruturas como objetos, arrays ou instâncias criadas com funções construtoras. Isso pode gerar confusão ao tentar identificar com precisão o que cada variável representa.

Exemplo de confusão:

```javascript
const carroMaria = new Carro("Onix", "Chevrolet", 2021, 2020);
console.log(typeof carroMaria); // "object"
```

Aqui, `carroMaria` foi criado com uma função construtora, mas o `typeof` ainda retorna `"object"`, sem revelar que se trata de uma instância de `Carro`.

---

### Verificação de instância com `instanceof`

Para resolver essa limitação, o JavaScript oferece o operador **`instanceof`**, que permite verificar se um objeto é uma instância de uma determinada função construtora (ou classe).

A sintaxe é:

```javascript
nomeDoObjeto instanceof EstruturaEsperada
```

Exemplos:

```javascript
carroMaria instanceof Carro            // true
conhecimentos instanceof Array         // true
pessoa instanceof Object               // true
conhecimentos instanceof Object        // true
```

> 🧪 `instanceof` retorna um valor booleano (`true` ou `false`), e é útil para identificar estruturas mais específicas de objetos personalizados ou nativos (como `Array`, `Function`, `Date`, etc.).

> ⚠️ Atenção: Apenas escrever `instanceof nomeDoObjeto` não é suficiente. É necessário informar a estrutura que queremos verificar, como `Array`, `Carro`, `Object`, etc.

---

### 🔍 Resumo da Aula 3

Nesta aula, aprendemos a utilizar duas palavras-chave essenciais para inspecionar e compreender melhor nossos dados em JavaScript:

* **`typeof`**: útil para verificar tipos primitivos como `string`, `number`, `boolean`. Mas limitado ao lidar com objetos complexos, pois identifica quase tudo como `"object"`.
* **`instanceof`**: ideal para verificar instâncias específicas, como saber se um valor é realmente um `Array`, ou se um objeto foi criado a partir de uma função construtora personalizada.

Com isso, ficou mais claro como distinguir entre **tipos primitivos** e **estruturas de dados complexas**, e como o JavaScript enxerga esses elementos internamente. Saber usar `typeof` e `instanceof` de forma consciente é uma etapa importante para escrever códigos mais robustos, confiáveis e legíveis.

## Aula 4 – Acesso a Atributos

### Objetivos da aula

Nesta aula, aprofundamos o conhecimento sobre como interagir com objetos em JavaScript, com foco nos seguintes objetivos:

* Compreender as técnicas de acesso a atributos em objetos JavaScript;
* Explorar a **mutabilidade** dos atributos, mesmo em objetos declarados com `const`;
* Utilizar métodos e funções úteis para acessar, validar e manipular atributos dinamicamente.

---

### Formas de acessar atributos

#### 📍 1. Notação ponto (`.`)

A forma mais comum e direta de acessar os atributos de um objeto é usando a **notação ponto**:

```javascript
console.log(pessoa.nome);     // "Gean"
console.log(pessoa.idade);    // 30
```

Essa abordagem é clara e objetiva, mas só funciona para nomes de atributos **estáticos e válidos como identificadores JavaScript** (sem espaços, por exemplo).

---

#### 📍 2. Notação com colchetes (`[]`)

A segunda forma é utilizar **colchetes e strings** com o nome do atributo:

```javascript
console.log(pessoa["nome"]);  // "Gean"
```

Essa abordagem permite usar **variáveis dinâmicas** para acessar os atributos. Exemplo:

```javascript
const chave = "idade";
console.log(pessoa[chave]);   // 30
```

> ⚠️ Observação: se esquecer de colocar o nome do atributo entre aspas (ou como string válida), o valor retornado será `undefined`.

---

### Criando funções para acesso dinâmico

Para facilitar o acesso aos atributos, especialmente quando reutilizável, podemos criar funções personalizadas:

```javascript
function exibirAtributo(nomeAtributo) {
  console.log(pessoa[nomeAtributo]);
}
```

Assim, podemos passar qualquer chave como argumento e obter o valor correspondente:

```javascript
exibirAtributo("conhecimentos");
```

---

### Verificando a existência de atributos

Podemos verificar se um atributo **existe** no objeto usando `if`:

```javascript
if (pessoa.sobrenome) {
  console.log("A pessoa tem um sobrenome");
}
```

No entanto, esse teste só retorna `true` se o valor não for `undefined`, `null` ou uma string vazia.

Para uma verificação mais robusta, mesmo que o valor esteja vazio, usamos:

```javascript
if ("sobrenome" in pessoa) {
  console.log("O atributo 'sobrenome' existe");
}
```

> 🧠 Isso garante que a chave está definida, independentemente de seu conteúdo.

---

### Mutabilidade de objetos com `const`

Mesmo que um objeto seja declarado com `const`, **seus atributos ainda podem ser alterados**:

```javascript
pessoa.nome = "João"; // permitido!
```

A referência ao objeto permanece constante, mas suas propriedades continuam mutáveis.

---

### Tornando objetos imutáveis com `Object.freeze()`

Se quisermos impedir qualquer alteração nos atributos de um objeto, usamos:

```javascript
Object.freeze(pessoa);
```

Após o uso do `freeze`, qualquer tentativa de modificar atributos será ignorada silenciosamente (sem erro, mas sem efeito).

---

### Explorando atributos com `Object.keys()` e `Object.values()`

#### 🔑 `Object.keys()`

Retorna um array com os **nomes** dos atributos do objeto:

```javascript
console.log(Object.keys(pessoa)); // ["nome", "idade", "eMaiorDeIdade", ...]
```

Podemos usá-lo, por exemplo, para contar o número de atributos:

```javascript
console.log(Object.keys(pessoa).length);
```

#### 📦 `Object.values()`

Retorna um array com os **valores** dos atributos do objeto:

```javascript
console.log(Object.values(pessoa)); // ["Gean", 30, true, ...]
```

---

### 🔍 Resumo da Aula 4

Nesta aula, aprofundamos o acesso, a verificação e a manipulação de atributos em objetos JavaScript. Aprendemos:

* A acessar atributos com **notação ponto** e **colchetes**;
* A criar funções para acesso dinâmico de propriedades;
* A verificar a existência de atributos usando `in`;
* Que objetos com `const` permitem alteração interna dos atributos;
* Como **congelar objetos** com `Object.freeze()` para torná-los imutáveis;
* Como listar e contar atributos com `Object.keys()`, e acessar valores com `Object.values()`.

Essas ferramentas tornam o trabalho com objetos muito mais poderoso, flexível e seguro — essenciais para trabalhar com dados estruturados de forma robusta.


## Aula 5 – Aplica a Herança

### Objetivos da aula

Nesta aula, aprofundamos o conceito de **herança na programação orientada a objetos com JavaScript**. Os objetivos principais foram:

* Compreender o conceito de herança;
* Praticar a criação de **classes e subclasses** por meio de funções construtoras;
* Entender a dinâmica de **herança de atributos e métodos** entre estruturas relacionadas.

---

### Criação de funções construtoras

Para começar, criamos duas funções construtoras: `Pessoa` e `Funcionario`. A função `Pessoa` inicialmente recebia apenas o atributo `nome`, e foi estruturada da seguinte forma:

```javascript
function Pessoa(nome) {
  this.nome = nome;
}
```

Instanciamos o objeto:

```javascript
const pessoa1 = new Pessoa("Maria");
console.log(pessoa1); // { nome: "Maria" }
```

Em seguida, criamos a função construtora `Funcionario`, que inclui os atributos `cargo` e `salario`:

```javascript
function Funcionario(nome, cargo, salario) {
  this.nome = nome;
  this.cargo = cargo;
  this.salario = salario;
}
```

E instanciamos:

```javascript
const funcionario1 = new Funcionario("Maria", "Desenvolvedora", 5000);
```

---

### Adicionando métodos à função construtora

O professor então enriqueceu a estrutura adicionando métodos. Dentro de `Pessoa`, foi incluído o método `dizOi`:

```javascript
this.dizOi = function () {
  console.log(this.nome + " diz olá!");
};
```

Esse método pode ser executado com:

```javascript
pessoa1.dizOi(); // "Maria diz olá!"
```

> 💡 Foi observado que, ao definir a função diretamente como valor do atributo, ela aparece como **função anônima** ao inspecionar o objeto. Para nomeá-la corretamente, usamos `function dizOi() { ... }`.

---

### Aplicando herança com `.call()`

Para **evitar repetição** de atributos ou métodos entre `Pessoa` e `Funcionario`, o professor aplicou o método `.call()` dentro da função `Funcionario`:

```javascript
function Funcionario(nome, cargo, salario) {
  Pessoa.call(this, nome);
  this.cargo = cargo;
  this.salario = salario;
}
```

Essa linha executa a função `Pessoa` dentro do contexto de `Funcionario`, fazendo com que o atributo `nome` (e eventuais métodos como `dizOi`) sejam herdados automaticamente.

> ✅ Com isso, `funcionario1` agora possui também o atributo `nome`, herdado de `Pessoa`.

---

### Entendendo o fluxo da herança

A aula enfatizou que a herança não é apenas uma forma de **evitar repetição de código**, mas sim um mecanismo para estabelecer **comunicação e compartilhamento de dados** entre estruturas que representam diferentes níveis de abstração.

Ao aplicar `Pessoa.call(this, nome)`, os dados são corretamente propagados:

* `this.nome` recebe `"Maria"` via herança;
* `this.cargo` e `this.salario` são exclusivos de `Funcionario`.

Logo:

```javascript
funcionario1.dizOi(); // "Maria diz olá!" (herdado de Pessoa)
```

---

### A importância de organizar atributos e métodos no lugar certo

O professor também demonstrou o caso inverso: tentar acessar um método ou atributo que **não pertence à estrutura original**.

Por exemplo, ao criar uma nova `Pessoa` e tentar acessar `pessoa1.descargo()`, onde `descargo` é um método que depende do atributo `cargo`, o resultado foi:

```javascript
undefined
```

Isso ocorreu porque `cargo` só existe em `Funcionario`, não em `Pessoa`. E o método `descargo`, por depender desse atributo, deve estar definido **na estrutura correta**:

```javascript
this.descargo = function () {
  console.log(this.cargo);
};
```

Quando usado corretamente:

```javascript
funcionario1.descargo(); // "Desenvolvedora"
```

Mas se for chamado por `pessoa1`, que não tem o atributo `cargo`, o resultado será indefinido.

> 🧠 A lição aqui é clara: **herança dá acesso**, mas **boas práticas indicam que cada método deve ser criado no lugar mais coerente com os dados que ele manipula**.

---

### 🔍 Resumo da Aula 5

Nesta aula, aprendemos na prática como aplicar **herança** com funções construtoras em JavaScript. Os pontos principais foram:

* A criação de funções construtoras (`Pessoa`, `Funcionario`);
* O uso de `this` para definir atributos e métodos;
* A utilização de `Pessoa.call(this, nome)` para herdar atributos de outra função;
* A importância de **colocar métodos no lugar certo**, respeitando a estrutura e a responsabilidade de cada objeto;
* A distinção entre dados que pertencem à **classe base** (Pessoa) e à **subclasse** (Funcionario).

Esses fundamentos são a base para evoluir para estruturas mais robustas usando `prototype` ou `class` e construir sistemas organizados com **reutilização e hierarquia lógica de dados**.

## Aula 6 – Aplique Encapsulamento

### Objetivos da aula

Nesta aula, o foco foi compreender como proteger os dados dentro dos objetos, garantindo que certas informações só possam ser acessadas ou modificadas de forma controlada. Os objetivos principais foram:

* Compreender o conceito de **encapsulamento** na programação orientada a objetos;
* Aprender como **implementar encapsulamento em JavaScript**;
* Explorar os **benefícios** dessa prática, como segurança e previsibilidade no código.

---

### O que é encapsulamento?

O encapsulamento é uma técnica que busca **proteger certos atributos** de um objeto contra alterações externas indesejadas. Isso é especialmente útil em casos como sistemas de e-commerce, onde, por exemplo, o **preço de um produto** não pode ser modificado diretamente pelo usuário.

Em JavaScript, ao utilizar funções construtoras, conseguimos simular essa proteção usando **variáveis internas** que não ficam acessíveis por fora.

---

### Criando atributos privados

Para encapsular um atributo, como `salario`, utilizamos `let` dentro da função construtora, em vez de usar `this.salario`. Dessa forma, o valor **não é exposto via notação ponto** e não pode ser acessado diretamente:

```javascript
function Funcionario(nome, cargo, salarioInicial) {
  this.nome = nome;
  this.cargo = cargo;

  let _salario = salarioInicial;
}
```

* A variável `_salario` é privada — ou seja, ela **só existe dentro do escopo da função construtora**.
* Tentar acessá-la diretamente com `funcionario1._salario` retornará `undefined`.

> ⚠️ Caso alguém use `funcionario1._salario = 9999`, isso **não altera** o valor encapsulado, apenas adiciona uma nova propriedade pública ao objeto com o mesmo nome. A versão privada permanece protegida.

---

### Criando métodos de acesso: Getters e Setters

Para acessar ou alterar o valor encapsulado de forma controlada, criamos dois métodos:

#### 🔍 Getter – `getSalario`

Permite **visualizar** o valor encapsulado:

```javascript
this.getSalario = function () {
  return _salario;
};
```

Uso:

```javascript
console.log(funcionario1.getSalario()); // Exibe o salário
```

#### ✏️ Setter – `setSalario`

Permite **alterar** o valor encapsulado, com validação:

```javascript
this.setSalario = function (valor) {
  if (typeof valor === "number") {
    _salario = valor;
  }
};
```

Uso:

```javascript
funcionario1.setSalario(6000); // Altera o salário, se for numérico
```

> 🧠 A validação com `typeof valor === "number"` garante que apenas valores numéricos sejam aceitos — prevenindo atribuições incorretas como strings, objetos ou `null`.

---

### Sobre a nomenclatura: `get` e `set`

O professor também destacou a importância de usar convenções claras para nomear esses métodos:

* `getNomeDoAtributo`: para obter dados;
* `setNomeDoAtributo`: para atribuir dados.

Esses nomes são chamados de **getters e setters**, e ajudam na legibilidade e na padronização do código — algo essencial em times e projetos maiores.

---

### Deixando o retorno mais elegante com template string

Por fim, o professor mostrou como melhorar a saída do método com **template strings** (entre crases \`` ` \`\`):

```javascript
this.apresentar = function () {
  return `${this.nome} trabalha como ${this.cargo}`;
};
```

Essa abordagem permite concatenar variáveis e texto de forma clara e expressiva.

---

### 🔍 Resumo da Aula 6

Nesta aula, aprendemos a aplicar **encapsulamento** em JavaScript para proteger atributos sensíveis dos objetos. Exploramos:

* A criação de **variáveis privadas** com `let` dentro da função construtora;
* A construção de **getters e setters** para acessar e alterar esses dados de forma segura;
* A **validação de tipo** antes de permitir alterações;
* A importância de **seguir padrões de nomenclatura** (`get` / `set`);
* O uso de **template strings** para gerar retornos mais legíveis.

Com essas técnicas, garantimos maior controle sobre os dados internos dos objetos e evitamos alterações indevidas, tornando nossas aplicações mais robustas e seguras.

## Aula 7 – Aplique o Polimorfismo

### 🎯 Objetivos da aula

* Compreender o conceito de **polimorfismo** na programação orientada a objetos;
* Aprender como **aplicar o polimorfismo** em JavaScript;
* Explorar os **benefícios do polimorfismo** na organização do código.

---

### 🧠 O que é Polimorfismo?

A palavra *polimorfismo* significa literalmente "muitas formas". Na programação orientada a objetos, esse conceito permite que **diferentes objetos usem o mesmo método**, mas com **comportamentos distintos**, adaptados ao contexto de cada um.

O professor apresentou um exemplo prático utilizando o método `aumento`. Esse método seria responsável por aplicar reajustes salariais em diferentes tipos de funcionários dentro de uma empresa fictícia.

---

### 🏗️ Criando o método `aumento`

A implementação inicial foi feita dentro da função construtora `Funcionario`. O método `aumento` era responsável por aplicar um reajuste de **10%** no salário do funcionário, utilizando o valor armazenado como variável privada (`_salario`):

```javascript
this.aumento = function () {
  const novoSalario = _salario * 1.1;
  console.log("Novo salário:", novoSalario);
  _salario = novoSalario;
};
```

Esse método foi testado com uma instância chamada `funcionario1`, com cargo de desenvolvedor e salário inicial definido. A atualização foi confirmada com o método `getSalario()`.

---

### 👥 Aplicando o polimorfismo: outro funcionário com regras diferentes

Em seguida, foi criado um segundo funcionário chamado **Pedro**, com cargo de **estagiário** e salário de R\$2000. A ideia era que **o estagiário tivesse um aumento diferente (7%)**, o que trouxe a necessidade do polimorfismo.

Sem polimorfismo, isso poderia ser feito com condicionais:

```javascript
if (this.cargo === "Estagiário") {
  _salario *= 1.07;
} else {
  _salario *= 1.1;
}
```

Contudo, essa abordagem **acopla lógica e dados**, tornando o código mais difícil de manter.

---

### ✅ Refatoração com polimorfismo

Para aplicar o polimorfismo corretamente, foi criada uma nova **função construtora chamada `Estagiario`**, que **herda** da função `Funcionario` utilizando `Funcionario.call(this, ...)`. A diferença é que a função `Estagiario` **redefine** o método `aumento`:

```javascript
function Estagiario(nome) {
  Funcionario.call(this, nome, "Estagiário", 2000);

  this.aumento = function () {
    const novoSalario = this.getSalario() * 1.07;
    this.setSalario(novoSalario);
  };
}
```

Dessa forma, o mesmo método (`aumento`) possui **comportamentos distintos** dependendo da instância: o funcionário comum recebe 10% e o estagiário recebe 7%.

---

### 🛠️ Ajustes finais e boas práticas

Durante os testes com o `Estagiario`, surgiu um erro ao tentar usar o método `getSalario()` porque a função `Funcionario` formatava a saída com interpolação de `this.nome` e `this.cargo`, que não estavam acessíveis da forma esperada.

A solução foi **simplificar o método `getSalario`**:

```javascript
this.getSalario = function () {
  return _salario;
};
```

Além disso, o professor reforçou a importância de **deixar cada método no local certo**, ou seja, métodos como `aumento` devem estar nas funções onde fazem mais sentido conceitualmente. Isso evita chamadas indevidas ou tentativas de acessar atributos que não existem na instância.

---

### 🧪 Resumo prático

Para fixar os conceitos, o professor revisou os principais pilares da programação orientada a objetos:

* **Herança**: compartilhamento de atributos e métodos entre funções construtoras;
* **Encapsulamento**: proteção de dados por meio de variáveis privadas e controle via `get` e `set`;
* **Polimorfismo**: métodos com mesmo nome, mas **comportamentos diferentes** dependendo do tipo do objeto.

---

### ✅ **Resumo da Aula 7**

Nesta aula, aprendemos a **aplicar o polimorfismo** em JavaScript por meio de métodos personalizados para diferentes tipos de objetos. Criamos funções construtoras para `Funcionario` e `Estagiario`, implementando a lógica de herança e sobrescrita de métodos. Vimos como tornar o código mais organizado e fácil de manter ao **evitar condicionais e delegar responsabilidades para os próprios objetos**. Finalizamos com boas práticas de encapsulamento e estruturação clara do código orientado a objetos.
