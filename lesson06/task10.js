let arr = [4, 1, 1, 4, 2, 3, 4, 4, 3, 3, 3, 1, 2, 4, 9, 3, 6, 6, 6, 6, 6, 6];

let number = null;
let highestCounter = 0;

for (let i = 0; i < arr.length; i++) {
  let tempCounter = 1;
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] === arr[j]) {
      tempCounter++;
    }
    if (tempCounter > highestCounter) {
      highestCounter = tempCounter;
      number = arr[i];
    }
  }
}

console.log(`The highest count is ${highestCounter} of number ${number}`);
