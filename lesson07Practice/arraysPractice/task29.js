let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

let rowCounter = 1;
let columnCounter = 1;

for (let row = 0; row < matrix.length; row++) {
  let sumOfRow = 0;
  let sumOfColumn = 0;
  for (let column = 0; column < matrix[row].length; column++) {
    sumOfRow += matrix[row][column];
    sumOfColumn += matrix[column][row];
  }
  console.log(`Sum of row ${rowCounter} = ${sumOfRow}`);
  console.log(`Sum of column ${columnCounter} = ${sumOfColumn}`);
  console.log(`==================`);

  rowCounter++;
  columnCounter++;
}
