const custo = 132.32;
const venda = 225.56;
const impostoCusto = 1.2;
let lucro;
let quant = 125;
let custoTotal;
custoTotal = custo * impostoCusto;
lucro = (venda - custoTotal) * quant;

if (custo < venda || custo > 0 || venda > 0 || quant < 0){
console.log("O custo total sobre 1 produto é de R$" + custoTotal.toFixed(2) + ". O lucro na venda de " + quant + " produtos é R$" + lucro.toFixed(2));
}
else{
    console.log("Valores inválidos");
} 
