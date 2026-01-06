// tests/calculadora.test.js

const { soma, subtracao } = require('../src/calculadora');

test('soma 1 + 2 deve ser igual a 3', () => {
   expect(soma(1, 2)).toBe(3);
});

test('subtracao 5 - 2 deve ser igual a 3', () => {
   expect(subtracao(5, 2)).toBe(3);
});
