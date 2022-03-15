// Fixação 1 - Soma os números pares de um array.
const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const encontraPares = (numero) => numero % 2 === 0;
const pares = numbers.filter(encontraPares);
console.log(pares);
const somaTudo = (resultado, numero) => resultado + numero;
const somaPares = pares.reduce(somaTudo);
console.log(somaPares); 

const somaValoresPares = (resultado, numero) => ((numero % 2 ===0)? resultado + numero : resultado);
const resultadoSomaPares = numbers.reduce(somaValoresPares);
console.log(resultadoSomaPares);