const sum = require('./sum');

describe('Testes de soma:', () => {
test('soma 4 e 5 e o resultado esperado é 9', () => {
    expect(sum(4,5)).toBe(9);
});
test('soma 0 e 0 e o resultado esperado é 0', () => {
    expect(sum(0,0)).toBe(0);
});
test('soma 4 e "5" e deve lançar um erro', () => {
    expect(() => {sum(4,"5")}).toThrow();
});
test('soma 4 e "5" e deve lançar o erro com a mensagem "parameters must be numbers"', () => {
    expect(() => {sum(4,"5")}).toThrow(new Error('parameters must be numbers'));
});
});