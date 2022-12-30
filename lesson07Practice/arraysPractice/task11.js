let arr = [1, 2, 3, 4, 5];
let arrTwo = [1, 3, 6, 8, 6];
let commonElements = [];

for (let i = 0; i < arr.length; i++) {
  if (arrTwo.includes(arr[i])) {
    commonElements.push(arr[i]);
  }
}
console.log(commonElements);
