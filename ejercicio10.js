
const numbers = [12, 21, 38, 5, 45, 37, 6];
function average(numberList) {
    promedio=0;
  for(i=0; i < numberList.length; i++){
    promedio+=numberList[i];   
  }
  return promedio / numberList.length;
}

console.log(average(numbers))