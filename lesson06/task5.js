let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

let highest = 0;
let row = 0;

for (let i = 0; i < arr.length; i++) {
  let tempSum = 0;
  for (let k = 0;k < arr[i].length; k++) {
    tempSum += arr[i][k];
  }

  if (tempSum > highest) {
    highest = tempSum;
    row = i;
  }
}

console.log(`The highest sum is on row: ${row}, with value:${highest}`);
