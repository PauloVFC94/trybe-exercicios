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