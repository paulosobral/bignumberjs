import BigNumber from 'bignumber.js';

/**
 * Calcula o valor sem a taxa percentual e aplica truncamento no arredondamento.
 * @param {string} quoteAmount - O valor inicial em formato de string.
 * @param {string} taxFee - A taxa percentual como string (exemplo: '2.5' para 2.5%).
 * @returns {Object} - O valor correspondente à taxa e o valor final após a subtração.
 */
export function calculateAmountWithoutTax(quoteAmount, taxFee) {

    // Converter as strings para objetos BigNumber
    const quoteAmountBN = new BigNumber(quoteAmount);
    console.log('quoteAmountBN: ', quoteAmountBN.toString());

    const taxFeeBN = new BigNumber(taxFee).dividedBy(100); // Converter taxa para fração decimal (2.5% -> 0.025)
    console.log('taxFeeBN: ', taxFeeBN.toString());

    // Calcular o valor correspondente à taxa
    // Arredondar os resultados para 2 casas decimais com truncamento
    const quoteAmountTaxFee = quoteAmountBN.multipliedBy(taxFeeBN).decimalPlaces(2, BigNumber.ROUND_DOWN);
    console.log('quoteAmountTaxFee: ', quoteAmountTaxFee.toString());

    // Subtrair a taxa do valor original
    const quoteAmountWithoutTaxFee = quoteAmountBN.minus(quoteAmountTaxFee).decimalPlaces(2, BigNumber.ROUND_DOWN);
    console.log('quoteAmountWithoutTaxFee: ', quoteAmountWithoutTaxFee.toString());

    return {
        quoteAmountTaxFee: quoteAmountTaxFee, // Valor da taxa truncado
        quoteAmountWithoutTaxFee: quoteAmountWithoutTaxFee, // Valor final truncado
    };
}
