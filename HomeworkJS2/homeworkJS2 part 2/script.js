// Write a function that will take an array of 5 numbers as an argument and return the sum.

// Print it in the console or in alert

// BONUS: Write another function called validateNumber() that checks if a number is a valid number and call it for every number. If one of the numbers of the array is invalid show an error message instead of a result.

function validateNumber(number) {
    for (let i = 0; i < number.length; i++) {
      if (typeof number[i] !== 'number') {
        return false;
      }
    }
    return true;
  }
  
  function sum(number) {
    let result = 0;
    if (validateNumber(number) === true) {
      for (let i = 0; i < number.length; i++) {
        result += number[i];
      }
      return result;
    } else {
      return "There is an entry in the array that is not a number";
    }
  }
  
  let numberArray = [3, 'not a number', 5, 2, 1];
  let anotherArray = [100, 200, 300, 250, 150];
  
  console.log(sum(numberArray)); 
  console.log(sum(anotherArray)); 