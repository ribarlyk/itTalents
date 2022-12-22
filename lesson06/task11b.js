let rows = 6;
let columns = 6;
let counter = 1;
let secondCounter = 1;
let matrix = [];

for (let row = 0; row < rows; row++) {
  let tempMatrix = [];
  for (let column = 0; column < columns; column++) {
    tempMatrix.push(counter);
    counter += rows;
  }
  secondCounter++;
  counter = secondCounter;
  matrix.push(tempMatrix);
}

console.log(matrix);
