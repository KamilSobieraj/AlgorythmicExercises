/***************************************************************************
 *********************** Sum all numbers in range
 ****************************************************************************
//e.g. sumAll([3,1]) should be 6

export default function sumAll(arr) {
  let sum = 0;
  const minRange = Math.min(...arr);
  const maxRange = Math.max(...arr);
  for (let i = minRange; i <= maxRange; i++) {
    sum += i;
  }
  return sum;
}

console.log(sumAll([3, 1])); //6
console.log(sumAll([1, 4])); //10


/****************************************************************************
*********************** Shoq unique numbers from two arrays 
***************************************************************************/
/*
function diffArrays(arr1, arr2) {
  sumArr = [...arr1, ...arr2];

  let filtered = sumArr.filter(e => !arr1.includes(e) || !arr2.includes(e));
  console.log(filtered.sort());
}

arr1 = [1, 2, 3, 7, 8, 9];
arr2 = [1, 2, 5, 6, 9];

console.log(diffArrays(arr1, arr2)); // [3, 5, 6, 7, 8]


function unite(...arr) {
  unitedArr = [].concat(...arguments);
  return [...new Set(unitedArr)].sort();
}
console.log(unite([1, 2, 3], [5, 4, 3], [6, 5, 3], [1, 1, 2]));

*/

/****************************************************************************
 *********************** Convert number to Roman number
 ***************************************************************************/
/*
function convertToRoman(inputNumber) {
  decimalValuesArray = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  romanValuesArray = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I"
  ];

  let convertedNumber = "";

  for (let i = 0; i < decimalValuesArray.length; i++) {
    while (decimalValuesArray[i] <= inputNumber) {
      convertedNumber += romanValuesArray[i];
      inputNumber -= decimalValuesArray[i];
    }
  }
  return convertedNumber;
}
console.log(convertToRoman(1036));
console.log(convertToRoman(97));
*/

/**************************************************************************************
 *********************** Search and Replace
 ***************(find a word and replace it with another)
 **************************************************************************************/

function replacer(input, stringToRemove, stringToAdd) {
  return input.replace(stringToRemove, stringToAdd);
}

console.log(
  replacer(
    "First word, second word, third sentence, fourth word",
    "sentence",
    "word"
  )
);
