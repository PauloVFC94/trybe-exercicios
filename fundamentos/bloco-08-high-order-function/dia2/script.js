const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
  ];
  
  // Adicione o código do exercício aqui:
  //exercicio 1 - Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.
  const authorBornIn1947 = (array) => array.author.birthYear === 1947;
  
  const verificaAutor = books.find(authorBornIn1947);

   console.log(verificaAutor);  
 //2 - Retorne o nome do livro de menor nome. //utilizei a biblioteca do mozilla de JS - assunto SORT
  const smallerName = (array) => { 
      array.sort((a,b) => a.name.length - b.name.length)
      return array[0].name;
  }
const menorNome = smallerName(books);
console.log(menorNome);

//3 - Encontre o primeiro livro cujo nome possui 26 caracteres.

const getNamedBook = (array) => array.name.length === 26;
const verifica26 = books.find(getNamedBook);
/* console.log(verifica26); */

//4 - Ordenar por ordem decrescente de data de lançamento
const orderBooksByReleaseDate = (a,b) => b.releaseYear - a.releaseYear;

const newListForReleaseDate = books.sort(orderBooksByReleaseDate);
console.log(newListForReleaseDate);

//5 - Se todos nasceram no século XX retorna true.

const bornInXX = (array) => array.author.birthYear >= 1901 && array.author.birthYear <= 2000;
const born = books.every(bornInXX);
console.log(born);

//6 - Se algum livro foi lançado na década de 80.
const releaseIn80 = (array) => array.releaseYear >= 1980 && array.releaseYear <= 1989;
const release = books.some(releaseIn80);
console.log(release);

 //7 - Se algum autor nasceu no mesmo ano.
 const bornYear = (array,i) => {
    const anos = array.author.birthYear;
    if (anos[i] === anos[i+1]){
        console.log(true);
    }
    console.log(false);
}
/* const verificaAnoIgual = books.forEach(bornYear);
console.log(verificaAnoIgual);  */
 
//2 - Segundo jeito de fazer a dois usando forEach()
const menorNomeForEach = () => {
    let nameBook = books[0].name;
    books.forEach((book) => {
        if(book.name.length < nameBook.length){
            nameBook = book.name;
        }
    })
    return nameBook;
}
console.log(menorNomeForEach(books));