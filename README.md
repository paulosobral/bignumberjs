# Exemplo de Uso da Biblioteca BigNumber.js com Arredondamento `BigNumber.ROUND_DOWN`

Este exemplo demonstra como utilizar a biblioteca `BigNumber.js` para realizar operações de subtração de valores fiduciários com precisão e controle de arredondamento utilizando a opção BigNumber.ROUND_DOWN`.

## Requisitos

- Node.js (qualquer versão moderna).
- `BigNumber.js` instalado via npm.

## Passos para Rodar o Exemplo

### 1. Como Funciona

#### 1.1 Arredondamento ROUND_DOWN:

O modo de arredondamento <code>BigNumber.ROUND_DOWN</code> garante que a subtração seja realizada sem arredondamento para cima. Isso significa que se o resultado da operação tiver casas decimais além do que foi configurado (2 casas), ele será truncado.

#### 1.2 Operação de Subtração:

Realizamos a operação de subtração entre <code>quoteAmount</code> e <code>taxFee</code> utilizando o método <code>.minus()</code>, que subtrai o valor de um objeto <code>BigNumber</code> de outro.

### 2. Resultado Esperado

O código realiza a seguinte operação:

```javascript
15 - 0.37 (0.375...) = 14.63
```

O arredondamento aplicado com <code>BigNumber.ROUND_DOWN</code> garante que o valor final seja 14.14.

### 3. Como Testar

1. Clone este repositório ou copie o código acima.
2. Instale as dependências executando o comando abaixo no diretório do seu projeto

```bash
npm install
```

3. Execute o comando para testar com o `Jest`:
```bash
npm t
```
(ou substitua por <code>npm run</code> + nome do script que deseja executar).

### 4. Considerações

A biblioteca `BigNumber.js` oferece uma grande flexibilidade para realizar cálculos com precisão arbitrária, e a configuração de arredondamento é essencial para manter o controle sobre como os valores são manipulados, especialmente quando você trabalha com valores fiduciários ou financeiros.
Neste exemplo, usamos <code>BigNumber.ROUND_DOWN</code> para garantir que o resultado seja truncado sem arredondamento para cima.
