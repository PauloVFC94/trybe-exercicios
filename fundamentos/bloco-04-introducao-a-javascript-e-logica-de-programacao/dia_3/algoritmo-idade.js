//Desenvolva um algoritmo que verifica se a pessoa é maior ou menor de idade.
//Imprima no console seguindo o exemplo: "A pessoa é maior de idade".
//Bônus: Crie a condição utilizando operador ternário.

let idadePessoa = Math.floor(Math.random() * 110);
console.log(idadePessoa);
let maiorIdade = idadePessoa >= 18 ? "A pessoa é maior de idade." : "A pessoa é menor de idade.";
console.log(maiorIdade);
