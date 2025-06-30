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
