let array = [5, 2, 5, 8, 3];
let newArray = array.slice();

for (let i = array.length - 1; i >= 0; i--) {
  newArray.push(array[i]);
}

console.log(newArray);
