/***************************************************************************
 *********************** Sum all numbers in range
 ****************************************************************************/
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
