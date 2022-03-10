const myFizzBuzz = require('./myFizzBuzz');

describe('Testes FizzBuzz:', () => {
    test('A entrada 15 retorna "fizzbuzz"', () => {
        expect(myFizzBuzz(15)).toBe('fizzbuzz');
    });
    test('A entrada 9 retorna "fizz"', () => {
        expect(myFizzBuzz(9)).toBe('fizz');
    });
    test('A entrada 5 retorna "buzz"', () => {
        expect(myFizzBuzz(5)).toBe('buzz');
    });
    test('A entrada 8 retorna 8', () => {
        expect(myFizzBuzz(8)).toBe(8);
    });
    test('A entrada "Arroz" retorna false', () => {
        expect(myFizzBuzz('Arroz')).toBe(false);
    });
});