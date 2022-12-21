let arr = [
  [1, 2, 3, 4, 3, 3],
  [1, 2, 22, 22, 5, 6],
  [14, 12, 1,1, 5, 6],
  [1, 2, 3, 4, 799, 9],
];

let tempSum = 0;
let highSum = 0;
let columnIndex = -1;
let rowIndex = -1;
let winningMatrix = [];

for (let row = 0; row < arr.length - 1; row++) {
  for (let column = 0; column < arr[row].length - 1; column++) {
    tempSum =
      arr[row][column] +
      arr[row][column + 1] +
      arr[row + 1][column] +
      arr[row + 1][column + 1];

    if (tempSum > highSum) {
      highSum = tempSum;
      columnIndex = column;
      rowIndex = row;
    }
  }
}
for (let j = rowIndex; j < rowIndex + 2; j++) {
  console.log(arr[j].splice(columnIndex, 2));
}
console.log(highSum);

