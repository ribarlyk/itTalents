let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

let doubledMatrix = [];
for (let i = 0; i < matrix.length; i++) {
  doubledMatrix.push(new Array(matrix[i].length));
}

for (let row = 0; row < matrix.length; row++) {
  for (let collumn = 0; collumn < matrix[row].length; collumn++) {
    doubledMatrix[row][collumn] = matrix[row][collumn] * 2;
  }
}

console.log(doubledMatrix);
