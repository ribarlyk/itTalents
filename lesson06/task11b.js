let rows = 4;
let columns = 5;
let counter = 1;
let secondCounter = 1;
let matrix = [];

for (let row = 0; row < rows; row++) {
  let tempMatrix = [];
  for (let column = 0; column < columns; column++) {
    tempMatrix.push(counter);
    counter += 4;
  }
  secondCounter++;
  counter = secondCounter;
  matrix.push(tempMatrix);
}

console.log(matrix);
