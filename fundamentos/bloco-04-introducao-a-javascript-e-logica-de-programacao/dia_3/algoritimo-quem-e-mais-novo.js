//Crie um algoritmo que recebe a idade de Carolzita , Murilo e Baêta e imprime quem é a pessoa mais nova no formato:
// "Pessoa" é a mais nova.

let pessoas = ["Carolzita","Murilo","Baêta"];
let idades =[Math.floor(Math.random() * 110),Math.floor(Math.random() * 110),Math.floor(Math.random() * 110)];
console.log("A idade de Carolzita, Murilo e Baêta são, respectivamente: " +idades);
let menorIdade = idades[0];
for (let index=0;index < idades.length; index +=1){
    if(menorIdade > idades[index] ){
        menorIdade = idades[index];
    }
}

console.log(pessoas[idades.indexOf(menorIdade)] + " é a pessoa mais nova.");