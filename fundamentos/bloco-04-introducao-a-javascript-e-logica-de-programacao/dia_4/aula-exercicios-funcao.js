//função palindromo
function palindromo(palavra) {
  let arrayPalavra = palavra.split("");
  let arrayReverso = [];
  let verificaPalindromo = false;
  for (let i = arrayPalavra.length - 1; i >= 0; i -= 1) {
    arrayReverso[arrayPalavra.length - 1 - i] = arrayPalavra[i];
  }
  let reverso = arrayReverso.join("");
  if (palavra === reverso) {
    verificaPalindromo = true;
  }
  console.log(verificaPalindromo);
}

palindromo("arara"); //true
palindromo("desenvolvimento"); //false

//funçao indice do maior valor
function indiceDoMaior(array) {
  let maiorNumero = -Infinity;
  let indiceMaior;
  for (i = 0; i < array.length; i += 1) {
    if (maiorNumero < array[i]) {
      maiorNumero = array[i];
    }
  }
  indiceMaior = array.indexOf(maiorNumero);
  console.log(indiceMaior);
}
let teste = [2, 3, 6, 7, 10, 1];
indiceDoMaior(teste); // 4

//funçao indice do menor valor
function indiceDoMenor(array) {
  let menorNumero = +Infinity;
  let indiceMenor;
  for (i = 0; i < array.length; i += 1) {
    if (menorNumero > array[i]) {
      menorNumero = array[i];
    }
  }
  indiceMenor = array.indexOf(menorNumero);
  console.log(indiceMenor);
}
let teste1 = [2, 4, 6, 7, 10, 0, -3];
indiceDoMenor(teste1); // 6

//função maior nome

function maiorNome(array) {
  let tamanhosNomes = [];
  for (i = 0; i < array.length; i += 1) {
    tamanhosNomes.push(array[i].length);
  }
  console.log(tamanhosNomes);
  let maiorNumero = -Infinity;
  let indiceMaior;
  for (i = 0; i < tamanhosNomes.length; i += 1) {
    if (maiorNumero < tamanhosNomes[i]) {
      maiorNumero = tamanhosNomes[i];
    }
  }
  indiceMaior = tamanhosNomes.indexOf(maiorNumero);
  console.log(array[indiceMaior]);
}
let teste2 = ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"];
maiorNome(teste2); // Fernanda
