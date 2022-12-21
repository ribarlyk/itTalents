let arr = [
  [1, 2, 3],
  [3, 2, 3],
  [5, 3, 3],
];

let sum = 0;

for (let row = 0; row < arr.length; row++) {
  for (let column = 0; column < arr[row].length; column++) {
    if (row > column) {
      sum += arr[row][column];
    }
  }
}

console.log(sum);
