const sum = (a, b) => a + b;

test('sums two values', () => {
  expect(sum(2, 3)).toEqual(5);
});

const minimo = (a, b) => a - b;

test('diminui dois valores', () => {
  expect(minimo(3,2)).toEqual(1);
});