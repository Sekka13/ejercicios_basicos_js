
const mixedElements = [6, 1, 'Marvel', 1, 'hamburguesa', '10', 'Prometeo', 8, 'Hola mundo'];
function averageWord(list) {
  promedio=0;
  for(i=0; i < list.length; i++){

    if(typeof(list[i])=="number"){
      promedio+=list[i];
    }
    else if(typeof(list[i])=="string"){
      promedio+=list[i].length;
    }
    else{
      continue;
    }
  }
  return promedio/list.length;
}

console.log(averageWord(mixedElements))
