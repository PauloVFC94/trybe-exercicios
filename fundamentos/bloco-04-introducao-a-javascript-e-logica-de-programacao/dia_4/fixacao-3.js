// função jokenpo //

function jokenpo (jogadaA,jogadaB){
    if (jogadaA===jogadaB){
        console.log("O jogador A jogou " + jogadaA + ". O jogador B jogou " + jogadaB + ". A partida empatou." );
    }
    else if(jogadaA==="pedra" && jogadaB==="tesoura" ||jogadaA==="papel" && jogadaB==="pedra" ||jogadaA==="tesoura" && jogadaB==="papel" ){
        console.log("O jogador A jogou " + jogadaA + ". O jogador B jogou " + jogadaB + ". O jogador A venceu." );
    }
    else if(jogadaB==="pedra" && jogadaA==="tesoura" ||jogadaB==="papel" && jogadaA==="pedra" ||jogadaB==="tesoura" && jogadaA==="papel" ){
        console.log("O jogador A jogou " + jogadaA + ". O jogador B jogou " + jogadaB + ". O jogador B venceu." );
    }
}
jokenpo("tesoura","pedra");//O jogador A jogou tesoura. O jogador B jogou pedra. O jogador B venceu.
jokenpo("pedra","pedra");//O jogador A jogou pedra. O jogador B jogou pedra. A partida empatou.
jokenpo("tesoura","papel");//O jogador A jogou tesoura. O jogador B jogou papel. O jogador A venceu.

//função soma //
function soma(numeroA,numeroB){
let resultado = numeroA + numeroB;
console.log("A soma de "+numeroA+ " e "+numeroB+" é "+resultado+".");
}
soma(150,332);//A soma de 150 e 332 é 482.

//função subtração//
function subtracao(numeroA,numeroB){
    let resultado = numeroA - numeroB;
    console.log("A subtracao de "+numeroA+ " e "+numeroB+" é "+resultado+".");
    }
subtracao(330,522);//A subtracao de 330 e 522 é -192.

//função multiplicação //
function multiplicacao(numeroA,numeroB){
    let resultado = numeroA * numeroB;
    console.log("A multiplicação de "+numeroA+ " e "+numeroB+" é "+resultado+".");
    }
multiplicacao(110,32);//A multiplicação de 110 e 32 é 3520.

//função divisão//
function divisao(numeroA,numeroB){
    let resultado = numeroA / numeroB;
    console.log("A divisão de "+numeroA+ " e "+numeroB+" é "+resultado+".");
    }
divisao(3333,5); //A divisão de 3333 e 5 é 666.6.

//função módulo//
function modulo(numeroA,numeroB){
    let resultado = numeroA % numeroB;
    console.log("O resto da divisão de "+numeroA+ " e "+numeroB+" é "+resultado+".");
    }
modulo(3333,5); //O resto da divisão de 3333 e 5 é 3.

