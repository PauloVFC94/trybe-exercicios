//parte1 - Obejtos e For-In
//Exercicio 1 -Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome.
let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};

console.log("Bem-vinda, " + info.personagem + "!");

// Exercicio 2 -   Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console.
info.recorrente = "Sim";
console.log(info);

//Exercicio 3 - Faça um for/in que mostre todas as chaves do objeto. 
for (let keys in info) {
  console.log(keys);
}

//Exercicio 4 - Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto.
for (let keys in info){
    console.log(info[keys]);
}

//Exercicio 5 -  Agora, defina um segundo objeto com a mesma estruturação, imprima os valores de cada objeto juntos de acordo com cada uma das chaves. 
let infoP = {
    personagem: "Tio Patinhas",
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: "O último MacPatinhas",
    recorrente: "Sim"
}
for (let keys in info){
    if(info[keys]===infoP[keys]){
        console.log("Ambos " + keys+"s");
    }
    else{
        console.log(info[keys]+ " e "+infoP[keys]);
    }
}
//exercicio 6 - cesse as chaves nome , sobrenome e titulo , que está dentro da chave livrosFavoritos , e faça um console.log no seguinte formato: "O livro favorito de Julia Pessoa se chama 'O Pior Dia de Todos'".

let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: 
     [ {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
            },
        ]
  };
console.log("O livro favorito de "+ leitor.nome +" "+leitor.sobrenome+" se chama "+ leitor.livrosFavoritos[0].titulo);
leitor.livrosFavoritos.push({titulo: 'Harry Potter e o Prisioneiro de Azkaban',autor: 'JK Rowling',editora: 'Rocco'});
console.log(leitor.nome + " tem " +leitor.livrosFavoritos.length+ " livros favoritos." );