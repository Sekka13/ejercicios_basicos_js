
const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumNumbers(numberList) {
    suma=0;
  for(i=0; i< numberList.length; i++){
    suma+=numberList[i];
  }
  return suma;
}

console.log(sumNumbers(numbers))