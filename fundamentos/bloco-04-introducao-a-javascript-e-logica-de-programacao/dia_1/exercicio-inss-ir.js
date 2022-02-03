const salarioBruto = 3058.55;
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


