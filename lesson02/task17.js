let squareSide = 11;
let sign = "+";
let star = "*";

let firstRow = "";
let lastRow = "";
let faceSquare = star;

for (let i = 1; i <= squareSide; i++) {
  firstRow += star;
  lastRow += star;
}
console.log(firstRow);
for (let j = 3; j <= squareSide; j++) {
  for (let k = 3; k <= squareSide; k++) {
    faceSquare += sign;
    if (k === squareSide) {
      faceSquare += star;
    }
  }
  console.log(faceSquare);
  faceSquare = star;
}

console.log(lastRow);
