
function greaterNumber(numberOne , numberTwo) {
    if(numberOne>numberTwo){
        return numberOne
    }
    else if(numberOne<numberTwo){
        return numberTwo
    }
    else{
        return "Los números son iguales"
    }
  }

  console.log(greaterNumber(5,5))