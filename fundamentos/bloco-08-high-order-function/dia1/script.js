/* 1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } 
representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF 
newEmployees para criar cada pessoa contratada em seu respectivo id . A sua função
deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar 
automaticamente um email no formato nome_da_pessoa@trybe.com . */

const cadastroEmployees = (nome) => {
  const email = nome.toLowerCase().replace(/ /g, "_");
  return { nomeCompleto: nome, email: `${email}@tribe.com` };
};

const newEmployees = (callback) => {
  const employees = {
    id1: callback("Pedro Guerra"), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: callback("Luiza Drumond"), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: callback("Carla Paiva"), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  };
  return employees;
};

console.log(newEmployees(cadastroEmployees));

/* 2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou"). */

const verificaSorteio = (numero) => {
    const numeroSorteado = parseInt(Math.random()*5);
    console.log(` O número escolhido é ${numero}, o número sorteado é ${numeroSorteado}`);
    if (numero === numeroSorteado) {
        return "Parabéns você ganhou!";
    }
    return "Tente Novamente";
}
const sorteio = (numero, callback) => {
    return callback(numero);
}
console.log(sorteio(3, verificaSorteio));

/* 3 - Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante) e o terceiro é uma função que checa se as respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.
*/
const corrigeProva = (gabarito, respostas) => {
    const gabaritoProva = gabarito;
    const respostaAluno = respostas;
    let pontuacao = 0;
    for (let i in gabaritoProva) {
        if (respostaAluno[i] === 'N.A') {
            pontuacao += 0;
        }
        else if (respostaAluno[i] === gabaritoProva[i]) {
            pontuacao += 1;
        }
        else if (respostaAluno[i] !== gabaritoProva[i]) {
            pontuacao -= 0.5;
    }
}
    return `A pontuação do Aluno na prova foi ${pontuacao} pontos.`
}

const confereProva = (gabarito, respostas, callback) => {
    return callback (gabarito, respostas);
}
const respostasProva = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const respostaAluno = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
console.log(confereProva(respostasProva, respostaAluno, corrigeProva));
console.log("Tamarindo");