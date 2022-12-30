let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

let sum = 0;
let row = 0;

for (let collumn = matrix[row].length - 1; collumn >= 0; collumn--) {
  sum += matrix[row][collumn];
  row++;
}
console.log(sum);
