function mostRepeats(array) {
    let counter = 0;
    let biggestCounter = 0;
    for(let i = 0; i < array.length; i += 1){
      for(let j = 0; j < array.length; j += 1){
        if(array[i] === array[j]){
          counter += 1;
        }
      }
      if(counter > biggestCounter){
        biggestCounter = counter;
        return array[i];
      }
    }
  }
  
  let array = [2, 3, 2, 5, 8, 2, 3];
  console.log(mostRepeats(array));