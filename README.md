
## 🛠️ Exercício Final – Módulo 24: Orientação a Objetos com JavaScript

### 🎯 Objetivo do Exercício

O desafio proposto ao final do módulo foi:

* Criar uma classe a partir de uma abstração;
* Criar **pelo menos duas classes herdeiras** dessa classe principal;
* Criar **três instâncias de objetos** com dados próprios;
* Armazenar o código em um repositório chamado `oo-js` e enviar o link pela plataforma.

---

### 🏗️ Estrutura do Código

Para atender aos requisitos do exercício, foi construída a seguinte estrutura de herança:

#### 🔹 Classe base: `Automovel`

A classe `Carro` representa uma abstração de um veículo automotor. Ela foi criada com os seguintes atributos comuns a qualquer automóvel:

* `marca`
* `modelo`
* `motor`
* `combustivel`
* `consumo`

Além disso, um método chamado `acelerar` foi adicionado à classe como comportamento genérico de um automóvel.

---

### 🧬 Subclasses criadas

Duas subclasses foram definidas com base em `Automovel`, cada uma com características específicas:

#### 🚗 `CarroPopular`

* Motor: 1.0
* Combustível: Flex
* Consumo: 10 km/l


#### 🚙 `CarroLuxo`

* Motor: 4.0
* Combustível: Gasolina
* Consumo: 5 km/l


---

### 🧾 Instâncias Criadas

Foram instanciados três objetos com base nas classes acima:

1. **Ford Ka** → classe `CarroPopular`
2. **Fiat Uno** → classe `CarroPopular`
3. **Mercedes AMG** → classe `CarroLuxo`

---

### ✅ Correções Realizadas

Inicialmente, a implementação não incluía a chamada correta da herança usando `Carro.call(this, ...)` dentro das funções construtoras `CarroPopular` e `CarroLuxo`. Após o feedback do monitor, o código foi corrigido para aplicar corretamente a herança de atributos da classe base `Carro`.

Além disso, foi removida a classe `Moto`, que havia sido criada anteriormente mas não se alinhava mais com a estrutura final proposta.

---

### 🧠 Conclusão

O exercício consolidou a compreensão de alguns pilares da Programação Orientada a Objetos no JavaScript: **abstração**, **herança**. A estrutura criada mostra como reutilizar código entre classes, especializar comportamentos e organizar a lógica de forma clara e escalável.
