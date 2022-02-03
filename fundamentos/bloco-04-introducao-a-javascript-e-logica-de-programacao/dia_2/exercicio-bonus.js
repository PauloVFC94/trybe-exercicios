let array = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let index = 1; index < array.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
      if (array[index] < array[secondIndex]) {
        let position = array[index];
        array[index] = array[secondIndex];
        array[secondIndex] = position;
      }
    }
  }
  console.log(array); // crescente

  let array2 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let index = 1; index < array2.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
      if (array2[index] > array2[secondIndex]) {
        let position = array2[index];
        array2[index] = array2[secondIndex];
        array2[secondIndex] = position;
      }
    }
  }
  console.log(array2);

  let vetor = [10,20,30,40,50,60,70];
  let vetorMulti = [];
  for (let index = 1; index < vetor.length; index += 1){
      for (let index2 = 0; index2 < index; index2 += 1){
          vetorMulti[index2] = vetor[index] * vetor[index2];
      }
  }
  console.log(vetorMulti);
