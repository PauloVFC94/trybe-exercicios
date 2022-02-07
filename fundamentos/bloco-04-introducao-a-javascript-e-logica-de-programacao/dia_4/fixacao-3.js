// função jokenpo //

function jokenpo(jogadaA, jogadaB) {
  if (jogadaA === jogadaB) {
    console.log(
      "O jogador A jogou " +
        jogadaA +
        ". O jogador B jogou " +
        jogadaB +
        ". A partida empatou."
    );
  } else if (
    (jogadaA === "pedra" && jogadaB === "tesoura") ||
    (jogadaA === "papel" && jogadaB === "pedra") ||
    (jogadaA === "tesoura" && jogadaB === "papel")
  ) {
    console.log(
      "O jogador A jogou " +
        jogadaA +
        ". O jogador B jogou " +
        jogadaB +
        ". O jogador A venceu."
    );
  } else if (
    (jogadaB === "pedra" && jogadaA === "tesoura") ||
    (jogadaB === "papel" && jogadaA === "pedra") ||
    (jogadaB === "tesoura" && jogadaA === "papel")
  ) {
    console.log(
      "O jogador A jogou " +
        jogadaA +
        ". O jogador B jogou " +
        jogadaB +
        ". O jogador B venceu."
    );
  }
}
jokenpo("tesoura", "pedra"); //O jogador A jogou tesoura. O jogador B jogou pedra. O jogador B venceu.
jokenpo("pedra", "pedra"); //O jogador A jogou pedra. O jogador B jogou pedra. A partida empatou.
jokenpo("tesoura", "papel"); //O jogador A jogou tesoura. O jogador B jogou papel. O jogador A venceu.

//função soma //
function soma(numeroA, numeroB) {
  let resultado = numeroA + numeroB;
  console.log(
    "A soma de " + numeroA + " e " + numeroB + " é " + resultado + "."
  );
}
soma(150, 332); //A soma de 150 e 332 é 482.

//função subtração//
function subtracao(numeroA, numeroB) {
  let resultado = numeroA - numeroB;
  console.log(
    "A subtracao de " + numeroA + " e " + numeroB + " é " + resultado + "."
  );
}
subtracao(330, 522); //A subtracao de 330 e 522 é -192.

//função multiplicação //
function multiplicacao(numeroA, numeroB) {
  let resultado = numeroA * numeroB;
  console.log(
    "A multiplicação de " + numeroA + " e " + numeroB + " é " + resultado + "."
  );
}
multiplicacao(110, 32); //A multiplicação de 110 e 32 é 3520.

//função divisão//
function divisao(numeroA, numeroB) {
  let resultado = numeroA / numeroB;
  console.log(
    "A divisão de " + numeroA + " e " + numeroB + " é " + resultado + "."
  );
}
divisao(3333, 5); //A divisão de 3333 e 5 é 666.6.

//função módulo//
function modulo(numeroA, numeroB) {
  let resultado = numeroA % numeroB;
  console.log(
    "O resto da divisão de " +
      numeroA +
      " e " +
      numeroB +
      " é " +
      resultado +
      "."
  );
}
modulo(3333, 5); //O resto da divisão de 3333 e 5 é 3.

//função maior//
function maior(numeroA, numeroB) {
  if (numeroA > numeroB) {
    console.log(numeroA + " é maior que " + numeroB + " .");
  } else if (numeroA < numeroB) {
    console.log(numeroB + " é maior que " + numeroA + " .");
  } else if (numeroA === numeroB) {
    console.log("Os números são iguais.");
  }
}
maior(10, 11); //11 é maior que 10 .

// Maior número entre três números
function maiorEntreTres(numeroA, numeroB, numeroC) {
  let numeros = [numeroA, numeroB, numeroC];
  let maior = -Infinity;
  for (i = 0; i < numeros.length; i += 1) {
    if (numeros[i] > maior) {
      maior = numeros[i];
    }
  }
  console.log("O maior número é " + maior);
}
maiorEntreTres(30, 20, 40); //O maior número é 40
//Positivo, Negativo ou Zero;
function negativoOuPositivo(numeroA) {
  if (numeroA > 0) {
    console.log("O número " + numeroA + " é positivo!");
  } else if (numeroA < 0) {
    console.log("O número " + numeroA + " é negativo!");
  } else if (numeroA === 0) {
    console.log("O número " + numeroA + " é zero!");
  }
}
negativoOuPositivo(15); //O número 15 é positivo!
//triangulo válido;
function triangulo(anguloA, anguloB, anguloC) {
  let trianguloValido = false;
  if (anguloA < 0 || anguloB < 0 || anguloC < 0) {
    console.log("Ângulos inválidos!");
  } else if (anguloA + anguloB + anguloC === 180) {
    trianguloValido = true;
    console.log(
      "Angles " +
        anguloA +
        ", " +
        anguloB +
        " and " +
        anguloC +
        "form a triangle? " +
        trianguloValido
    );
  } else {
    console.log(
      "Angles " +
        anguloA +
        ", " +
        anguloB +
        " and " +
        anguloC +
        " form a triangle? " +
        trianguloValido
    );
  }
}
triangulo(60, 60, 60); //Angles 60, 60 and 60form a triangle? true
//função xadrez
function xadrez(peca) {
  let nomepeca = peca.toLowerCase();

  switch (nomepeca) {
    case "bispo":
      console.log("O bispo se move qualquer quantidade de casas na diagonal");
      break;
    case "peão":
      console.log("O peão se move pra frente e captura peças na diagonal");
      break;
    case "cavalo":
      console.log(
        "O cavalo se move em L (duas casas em uma direção e uma casa para outra)."
      );
      break;
    case "torre":
      console.log(
        "A torre se move quantas casas quiser na horizontal ou vertical."
      );
      break;
    case "rainha":
      console.log(
        "A rainha pode se mover para qualquer direção menos em L e quantas casas quiser"
      );
      break;
    case "rei":
      console.log(
        "O rei pode se mover pra qualquer casa imediatamente próxima a ele, desde que não se coloque em cheque"
      );
      break;
    default:
      console.log("Essa não é uma peça de xadrez");
  }
}
xadrez("bispo"); //O bispo se move qualquer quantidade de casas na diagonal
//função Nota e Conceito
function conceitoNota(nota) {
  if (nota >= 90 && nota < 100) {
    console.log("Conceito A");
  } else if (nota >= 80 && nota < 100) {
    console.log("Conceito B");
  } else if (nota >= 70 && nota < 100) {
    console.log("Conceito C");
  } else if (nota >= 60 && nota < 100) {
    console.log("Conceito D");
  } else if (nota >= 50 && nota < 100) {
    console.log("Conceito E");
  } else if (nota < 50) {
    console.log("Conceito F");
  } else {
    console.log("ERRO: Valor Inválido");
  }
}
conceitoNota(85); //Conceito B

//Verifica tres numeros e identifca se algum for par
function par(numeroA, numeroB, numeroC) {
  let verificaPar = false;
  if (numeroA % 2 === 0 || numeroB % 2 === 0 || numeroC % 2 === 0) {
    verificaPar = true;
  } else {
    verificaPar = false;
  }
 console.log("Anyone of this numbers is even? " + verificaPar);
}
par(11, 35, 33);//Anyone of this numbers is even? false

//Verifica tres numeros e identifca se algum for par
function impar(numeroA, numeroB, numeroC) {
    let verificaImpar = false;
    if (numeroA % 2 === 1 || numeroB % 2 === 1 || numeroC % 2 === 1) {
      verificaImpar = true;
    } else {
      verificaImpar = false;
    }
   console.log("Anyone of this numbers is odd? " + verificaImpar);
  }
impar(15,35,70);//Anyone of this numbers is odd? true

//salario líquido após INSS e IR
function salarioLiquido(salario){
    const salarioBruto = salario;
    const aliquotaInss1 = 0.08;
const aliquotaInss2 = 0.09;
const aliquotaInss3 = 0.11;
const aliquotaInss4 = 570.88;
const aliquotaIr1 = 0;
const aliquotaIr2 = 0.075;
const aliquotaIr3 = 0.15;
const aliquotaIr4 = 0.225;
const aliquotaIr5 = 0.275;
const deducao1 = 0;
const deducao2 = 142.80;
const deducao3 = 354.80;
const deducao4 = 636.13;
const deducao5 = 869.36;
let salarioBase;
let salarioLiquido;

if (salarioBruto < 1556.94){
    salarioBase = salarioBruto - (salarioBruto*aliquotaInss1); 
}
else if (salarioBruto >= 1903.99 && salarioBruto <= 2594.92){
    salarioBase = salarioBruto - (salarioBruto*aliquotaInss2); 
}
else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82){
    salarioBase = salarioBruto - (salarioBruto*aliquotaInss3); 
}
else if (salarioBruto > 5189.82){
    salarioBase = salarioBruto - aliquotaInss4; 
}
else {
    console.log("Informação Inválida");
}

console.log("O salário base é " + salarioBase.toFixed(2));

if (salarioBase < 1903.98){
    salarioLiquido = salarioBase - aliquotaIr1 + deducao1; 
}
else if (salarioBase >= 1903.99 && salarioBase <= 2826.65){
    salarioLiquido = salarioBase - (salarioBase * aliquotaIr2) + deducao2;
}
else if (salarioBase >= 2826.66 && salarioBase <= 3751.05){
    salarioLiquido = salarioBase - (salarioBase * aliquotaIr3) + deducao3;
}
else if (salarioBase >= 3751.06 && salarioBase <= 4664.68){
    salarioLiquido = salarioBase - (salarioBase * aliquotaIr4) + deducao4;
}
else if (salarioBase > 4664.68){
    salarioLiquido = salarioBase - (salarioBase * aliquotaIr5) + deducao5;
}
else{
    console.log("Informação inválida");
}
console.log("O salário líquido é " + salarioLiquido.toFixed(2));
}
salarioLiquido(4200.33);//O salário base é 3738.29 O salário líquido é 3532.35