# Módulo 24 - POO Java Script

## Menu 
[Aula 1 - Conheça a orientação a objetos ](#aula-1--conheça-a-orientação-a-objetos)  
[Aula - ]()  
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

