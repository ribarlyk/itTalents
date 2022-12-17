let array = [3, 7, 7, 3];
let newArray = [];
let isSame = true;
for (let i = array.length - 1; i >= 0; i--) {
  newArray.push(array[i]);
}
for (let i = 0; i < array.length; i++) {
  if (array[i] != newArray[i]) {
    isSame = false;
    break;
  }
}

console.log(isSame);
console.log(newArray);
console.log(array);
