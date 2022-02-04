let jogadas= ["pedra","papel","tesoura"];
let jogadorA = jogadas[Math.floor(Math.random() * jogadas.length)]; // referencia https://www.codegrepper.com/code-examples/javascript/function+for+random+number+based+on+array+length+javascript
let jogadorB = jogadas[Math.floor(Math.random() * jogadas.length)];
console.log("jogador A jogou: " +jogadorA +". Jogador B jogou:" + jogadorB +".");
 if(jogadorA === jogadorB){
    console.log("Empate");
 }

else if (jogadorA === "tesoura" && jogadorB === "papel"||
    jogadorA === "papel" && jogadorB === "pedra"||
    jogadorA === "pedra" && jogadorB === "tesoura")
    {

    console.log("Resultado: jogador A venceu!");
    }
    

else if (jogadorB === "tesoura" && jogadorA === "papel" ||
    jogadorB === "papel" && jogadorA === "pedra" ||
    jogadorB === "pedra" && jogadorA === "tesoura")
    {
    console.log("Resultado: jogador B venceu!");
    }

