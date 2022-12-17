let array = [18, 19, 32, 1, 3, 4, 5, 6, 7, 8];
let arrayTwo = [1, 2, 3, 4, 5, 16, 17, 18, 27, 11];
let mixedArray = [];

for (let i = 0; i < array.length; i++) {
  if (arrayTwo[i] > array[i]) {
    mixedArray.push(arrayTwo[i]);
  } else {
    mixedArray.push(array[i]);
  }
}
console.log(array);
console.log(arrayTwo);
console.log(mixedArray);
