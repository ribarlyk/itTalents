let arr = [
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
];

let mainDiagonal = [];

for (let i = 0; i < arr.length; i++) {
  mainDiagonal.push(arr[i][i]);
}

console.log(mainDiagonal);
