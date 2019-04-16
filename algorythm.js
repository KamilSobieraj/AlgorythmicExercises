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
*********************** Shoq unique numbers in two arrays 
***************************************************************************/

function diffArrays(arr1, arr2) {
  sumArr = [...arr1, ...arr2];

  let filtered = sumArr.filter(e => !arr1.includes(e) || !arr2.includes(e));
  console.log(filtered.sort());
}

arr1 = [1, 2, 3, 7, 8, 9];
arr2 = [1, 2, 5, 6, 9];

console.log(diffArrays(arr1, arr2)); // [3, 5, 6, 7, 8]
