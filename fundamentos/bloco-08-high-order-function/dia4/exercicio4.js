const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

const mediaEstudantes = students.map((estudante,index) => {
    return {name: estudante,
        average: grades[index].reduce((acumulaMedias, medias) => acumulaMedias + medias,0) / grades[index].length
    }
});

console.log(mediaEstudantes);
