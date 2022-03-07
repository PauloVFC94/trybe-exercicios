const myRemove = require('./rmvArray');

describe('Testes de Array:', () => {
    test('Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna [1, 2, 4]', () => {
        expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    });
    test('Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna [1, 2, 3, 4]', () => {
        expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
    });
    test('Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna [1, 2, 4]', () => {
        expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
    });
});