# 🍔 Desafio TDD: DevFood Backend

Bem-vindo ao time de engenharia da **DevFood**! 🚀

## 📝 Contexto
Você é o novo **Backend Developer** da startup. O Arquiteto de Software já criou a estrutura do sistema e escreveu os testes automatizados para garantir a qualidade do código.

**O Problema:** As funções estão vazias! O sistema está quebrado e os clientes não conseguem fechar os pedidos.

## 🎯 Sua Missão
Implementar a lógica dentro das 3 funções principais para fazer os **5 Testes** passarem de Vermelho (❌) para Verde (✅).

---

## 💼 Regras de Negócio
Aqui estão as especificações definidas pelo Arquiteto que você deve seguir:

### 1. Cálculo dos Itens 🧾
* Deve retornar a **soma simples** dos preços de todos os produtos no array.

### 2. Cálculo do Frete 🛵
* **Padrão:** O valor base é **R$ 2,00 por Km**.
* **Taxa Extra:** Se a distância for **maior que 5km**, cobra-se uma taxa extra de **R$ 3,00** (pelo cansaço do motoboy).

### 3. Regra VIP (O Desafio) 🌟
* Se o cliente for **VIP** **E** o total dos itens for **maior que R$ 80,00**:
    * O frete deve ser **GRÁTIS** (R$ 0,00).

---

## 🛠️ Como Rodar o Projeto

1. Certifique-se de ter o [Node.js](https://nodejs.org/) instalado.
2. Clone este repositório ou baixe os arquivos.
3. No terminal, execute os testes:

```bash
node devfood.test.js
