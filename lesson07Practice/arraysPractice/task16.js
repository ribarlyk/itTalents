let arr = [1, 2, 3, 4, 5, 6, 7];
let arrTwo = [1, 2, 3, 4, 5, 6, 8];
let areEqual = true;

if (arr.length === arrTwo.length) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != arrTwo[i]) {
      areEqual = false;
    }
  }
  areEqual
    ? console.log("Arrays are equal.")
    : console.log("Arrays are not equal.");
} else {
  console.log("Arrays are not equal.");
}
