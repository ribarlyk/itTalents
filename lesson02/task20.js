let start = 1;
let row = "";

for (let i = start; i <= 10; i++) {
  for (let j = start; j <= 9; j++) {
    row += j;
  }
  for (let k = 0; k < start; k++) {
    let numbersLeft = "";
    numbersLeft += k;
    row += numbersLeft;
  }

  start++;
  console.log(row);
  row = "";
}
