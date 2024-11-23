import { calculateAmountWithoutTax } from './util/calculator.js';

// Entradas
const quoteAmount = '15'; // Valor original
const taxFee = '2.5'; // Taxa percentual como fração decimal (2.5%)

// Calcular o valor sem a taxa
const { quoteAmountTaxFee, quoteAmountWithoutTaxFee } = calculateAmountWithoutTax(quoteAmount, taxFee);

// Exibir o resultado
console.log(`Valor original: ${quoteAmount}`);
console.log(`Taxa aplicada (em fração): ${taxFee}`);
console.log(`Valor correspondente à taxa: ${quoteAmountTaxFee.toString()}`);
console.log(`Valor sem a taxa: ${quoteAmountWithoutTaxFee.toString()}`);
