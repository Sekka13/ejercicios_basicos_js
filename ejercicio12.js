
const duplicates = [
  "sushi",
  "pizza",
  "burger",
  "potatoe",
  "pasta",
  "ice-cream",
  "pizza",
  "chicken",
  "onion rings",
  "pasta",
  "soda",
];

function removeDuplicates(list) {
 
  let newArray = [];

 
  for (let i = 0; i < list.length; i++) {
  
    let elNumeroEsta = false;

    
    for (let j = 0; j < newArray.length; j++) {
      if (list[i] == newArray[j]) {
        elNumeroEsta = true;
        break;
      }
    }  
    if (!elNumeroEsta) {
      newArray.push(list[i]);
    }
  }
  return newArray
}

console.log(removeDuplicates(duplicates))
