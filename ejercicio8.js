
const avengers = ['Hulk', 'Thor', 'Iron Man', 'Captain A.', 'Spiderman', 'Captain M.'];

function findLongestWord(stringList) {
    let stringMayor="";
    for(i=0; i<stringList.length; i++){

        if(stringList[i].length > stringMayor.length){
            stringMayor = stringList[i];
        } 
        else{
            continue;
        }       
    }
    return stringMayor;
}

console.log(findLongestWord(avengers))