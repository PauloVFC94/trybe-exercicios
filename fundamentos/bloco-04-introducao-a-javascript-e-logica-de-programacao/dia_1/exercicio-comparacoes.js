const num1 = 90;
const num2 = 80;
const num3 = 60;

if (num1 > num2 && num1 > num3){
    console.log("O maior é " + num1);
}
else if (num2 > num1 && num2 > num3){
    console.log("O maior é " + num2);
}
else {
    console.log("O maior é " + num3);
}

if (num1 > 0){
    console.log("positivo");
}
else if (num1 < 0){
    console.log("negativo");
}
else{
    console.log("zero");
}

if (num1 > 0 && num2 > 0 && num3 > 0 && num1 + num2 +num3 == 180){
    console.log("true");
}
else if (num1 > 0 && num2 > 0 && num3 > 0 && num1 + num2 +num3 !== 180){
    console.log("false");
}
else{
    console.log("Valores inválidos");
}

