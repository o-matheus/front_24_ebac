
## 🛠️ Exercício Final – Módulo 24: Orientação a Objetos com JavaScript

### 🎯 Enunciado da Atividade

O exercício proposto consistia em:

* Criar uma **classe base** a partir de uma abstração;
* Criar **duas classes que herdem** da classe principal;
* Criar pelo menos **três instâncias de objetos**;
* Armazenar o código em um repositório chamado **OO-DALLEJS** e compartilhar o link na plataforma.

---

### 🔧 Estrutura e Implementação

Para iniciar o projeto, foi realizado um `git checkout -b oo` para criar uma nova branch dedicada à tarefa.

#### 🧱 Classe de Abstração

A abstração escolhida foi a classe `Automovel`, representando genericamente um **veículo automotor** com características como:

* Tipo de **combustível**;
* **Potência** do motor;
* Outras propriedades relacionadas à mecânica e desempenho do veículo.

#### 🧬 Classes Herdeiras

Duas subclasses foram derivadas da classe `Automovel`, aproveitando o conceito de **herança**:

1. **`Carro`** – Representando veículos de quatro rodas;
2. **`Moto`** – Representando veículos de duas rodas.

Ambas herdaram os atributos básicos da classe `Automovel`.

#### 🧪 Instâncias Criadas

Três objetos foram instanciados a partir dessas classes:

* `FordKa` – Um carro com motor pequeno e combustível flex;
* `ChevroletImpala` – Um carro clássico movido a gasolina;
* `HondaBiz` – Uma motocicleta com baixa cilindrada, prática para o dia a dia urbano.

#### ⚙️ Métodos Personalizados

Cada classe herdeira também ganhou um método próprio:

* `Carro` implementa o método `acelerar()`, que simula o comportamento do veículo ganhando velocidade.
* `Moto` implementa o método `lancarRapido()`, representando o estereótipo divertido de “furar sinal e cortar faixa” — com bom humor.

---

### 📁 Organização do Repositório

O código do exercício foi versionado em um repositório Git chamado **OO-DALLEJS**, conforme solicitado no enunciado.
