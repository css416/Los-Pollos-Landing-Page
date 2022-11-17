// Fisher-Yates (aka Knuth) Shuffle

// 1, 2, 3, 4, 5

export const Shuffle = (array) => {

    for (let i = array.length - 1; i > 0; i--) { // starts at last index    
        const j = Math.floor(Math.random() * (i + 1)); // randomizes a number from 0 to array length
        // alt to the code below [arrayCopy[i], arrayCopy[j]] = [arrayCopy[j], arrayCopy[i]];
        let temp = array[i]; // temp will be equal to the last element in array
        array[i] = array[j]; // the last element's value will be equal to value on the randomized index number
        array[j] = temp; // the randomized element's value will now be equal to the placeholder temp
    }
  
    return array;
  }