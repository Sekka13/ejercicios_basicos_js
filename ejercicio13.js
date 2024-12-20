const names = [
  "Peter",
  "Steve",
  "Tony",
  "Natasha",
  "Clint",
  "Logan",
  "Xabier",
  "Bruce",
  "Peggy",
  "Jessica",
  "Marc",
];
function nameFinder(nameList, name) {
  for (i = 0; i < nameList.length; i++) {
    if (name == nameList[i]) {
      return [true, i];
      break;
    } else if (i == nameList.length - 1) {
      return false;
    }
  }
}

console.log(nameFinder(names, "Marc"));