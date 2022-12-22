let rows = 4;
let columns = 5;
let counter = 1;
let secondCounter = 1;
let oddCounter = 8;
let tempCounter = 0;
let matrix = [];

for (let row = 0; row < rows; row++) {
  let tempMatrix = [];
  tempCounter = oddCounter;

  for (let column = 0; column < columns; column++) {
    if (column % 2 === 1) {
      tempMatrix.push(tempCounter);
      tempCounter += 8;
    } else {
      tempMatrix.push(counter);
    }
    counter += 4;
  }
  secondCounter++;
  oddCounter--;
  counter = secondCounter;

  matrix.push(tempMatrix);
}

console.log(matrix);
