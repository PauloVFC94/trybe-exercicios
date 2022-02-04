//Crie um algoritmo que recebe a idade de Carolzita , Murilo e Baêta e imprime quem é a pessoa mais nova no formato:
// "Pessoa" é a mais nova.

let pessoas = ["Carolzita","Murilo","Baêta"];
let idades =[Math.floor(Math.random() * 110),Math.floor(Math.random() * 110),Math.floor(Math.random() * 110)];
console.log("A idade de Carolzita, Murilo e Baêta são, respectivamente: " +idades);
let menorIdade = Infinity;
let novos = [];
for (let index=0;index < idades.length; index +=1){
    if(idades[index] < menorIdade){
        menorIdade = idades[index];
    }
}
for (let index=0; index <idades.length; index +=1){ //Situação de ter pessoas com idades iguais
    if(menorIdade === idades[index]){
        novos.push(index);
    }
}

if(novos.length === 1){ //imprimir o nome nas diversas situações.
console.log(pessoas[novos[0]] + " é a pessoa mais nova.");
}
else if (novos.length === 2){
    console.log(pessoas[novos[0]] + " e " +pessoas[novos[1]] + " são as pessoas mais novas.");
}
else if(novos.length === 3){
    console.log(pessoas[novos[0]] + ", " +pessoas[novos[1]] + " e " + pessoas[novos[2]] + " são as pessoas mais novas.");
}
