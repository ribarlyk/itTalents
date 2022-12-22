let row = 4;
let column = 5;
let matrix = [];
let counter = 1;

for (let j = 0; j < row; j++) {
  let tempoMatrix = [];

  for (let k = 0; k < column; k++) {
    tempoMatrix.push("@");
  }
  matrix.push(tempoMatrix);
}

for (let i = 0; i < row; i++) {
  let rowOne = i;

  for (let k = 0; k < column; k++) {
    let columnOne = k;
    if (rowOne >= 0 && columnOne <= column - 1) {
      matrix[rowOne][columnOne] = counter;
      rowOne--;
      columnOne++;
      counter++;
    }
  }
}

for (let j = 0; j < row; j++) {
  let rowTwo = row - 1;

  for (let z = 1; z < column - j; z++) {
    let columnTwo = z + j;
    if (rowTwo >= 0 && columnTwo <= column) {
      matrix[rowTwo][columnTwo] = counter;
      rowTwo--;
      counter++;
      columnTwo++;
    }
  }
}
console.log(matrix);
