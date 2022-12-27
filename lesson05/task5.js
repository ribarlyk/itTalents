let arrayOne = [
  [1, 2, 3, 4],
  [3, 2, 1],
  [2, 5, 6, 8 ],
];

let sum = 0;
let high = 0;
let row = 0;
for (let i = 0; i < arrayOne.length; i++) {
  for (let k = 0; k < arrayOne[i].length; k++) {
    sum += arrayOne[i][k];
  }

  if (sum > high) {
    high = sum;
    row = i;
    sum = 0;
  }
}
console.log(high, row);
