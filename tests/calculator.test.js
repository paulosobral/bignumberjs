import {
    describe,
    it,
    expect
} from '@jest/globals';

import { calculateAmountWithoutTax } from '../src/util/calculator.js';

/* Util: 
    https://www.4devs.com.br/calculadora_porcentagem
    https://mikemcl.github.io/bignumber.js/
    https://jestjs.io/docs/ecmascript-modules 
*/

describe('Testing functioncalculateAmountWithoutTax return roundedWithoutTaxFee precision cases', () => {

    /* 
        Ex: 15 - 0.37 (0.375) = 14.63
    */
    it('1-) should return value truncated when half (5) of the third decimal place', () => {

        const expectedQuoteAmountTaxFee = '0.37';
        const expectedQuoteAmountWithoutTaxFee = '14.63';
        
        console.log('1-) start should return value truncated when half (5) of the third decimal place')
        const { quoteAmountTaxFee, quoteAmountWithoutTaxFee } = calculateAmountWithoutTax('15', '2.5');
        console.log('1-) finished should return value truncated when half (5) of the third decimal place')

        expect(quoteAmountTaxFee.toString()).toStrictEqual(expectedQuoteAmountTaxFee);
        expect(quoteAmountWithoutTaxFee.toString()).toStrictEqual(expectedQuoteAmountWithoutTaxFee);
    })

    /* 
        Ex: 14.50 - 0.36 (0.362) = 14.14
    */
    it('2-) should return value truncated when less than half (5) of the third decimal place', () => {

        const expectedQuoteAmountTaxFee = '0.36';
        const expectedQuoteAmountWithoutTaxFee = '14.14';
        
        console.log('2-) start should return value truncated when less than half (5) of the third decimal place')
        const { quoteAmountTaxFee, quoteAmountWithoutTaxFee } = calculateAmountWithoutTax('14.50', '2.5');
        console.log('2-) finished should return value truncated when less than half (5) of the third decimal place')
        
        expect(quoteAmountTaxFee.toString()).toStrictEqual(expectedQuoteAmountTaxFee);
        expect(quoteAmountWithoutTaxFee.toString()).toStrictEqual(expectedQuoteAmountWithoutTaxFee);
    })

    /* 
        Ex: 12.70 - 0.31 (0.317) = 12.39
    */
    it('3-) should return value truncated when greater than half (5) of the third decimal place', () => {

        const expectedQuoteAmountTaxFee = '0.31';
        const expectedQuoteAmountWithoutTaxFee = '12.39';
        
        console.log('3-) start should return value truncated when less than half (5) of the third decimal place')
        const { quoteAmountTaxFee, quoteAmountWithoutTaxFee } = calculateAmountWithoutTax('12.70', '2.5');
        console.log('3-) finished should return value truncated when less than half (5) of the third decimal place')
        
        expect(quoteAmountTaxFee.toString()).toStrictEqual(expectedQuoteAmountTaxFee);
        expect(quoteAmountWithoutTaxFee.toString()).toStrictEqual(expectedQuoteAmountWithoutTaxFee);
    })
})