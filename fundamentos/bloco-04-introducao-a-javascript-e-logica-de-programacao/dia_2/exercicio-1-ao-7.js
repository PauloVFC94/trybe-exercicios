let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 0; index < numbers.length; index += 1){
    console.log(numbers[index]);
} //exercicio 1

let sum = 0; 
for (let index = 0; index < numbers.length; index += 1){
        sum = sum + numbers[index];
}
console.log("A soma do array é " + sum); //exercicio 2

media = sum / numbers.length;

console.log("A média é " + media); //exercicio 3

if (media > 20){
    console.log("A média é maior que 20.");
}
else {
    console.log("A média é menor ou igual a 20.");
} // exercicio 4

let maior = numbers[0];
for (let index = 0; index < numbers.length; index += 1){
            if (numbers[index] > maior){
        maior = numbers[index];
    }
}
    
console.log("O maior número é " + maior); //exercicio 5

let contadorImpar = 0;

for (let index = 0; index < numbers.length; index += 1){
    if (numbers[index] % 2 == 0){
        contadorImpar += 0;
    }
    else{
        contadorImpar += 1;
    }
}
if (contadorImpar == 0){
    console.log("Nenhum valor ímpar encontrado");
}
else if (contadorImpar > 0){
        console.log("Temos " + contadorImpar + " números ímpares.");
    }
else {
    console.log("Erro!");
} // exercicio 6
let menor = numbers[0];
for (let index = 0; index < numbers.length; index += 1){
            if (numbers[index] < menor){
        menor = numbers[index];
    }
}
    
console.log("O menor número é " + menor); //exercicio 7