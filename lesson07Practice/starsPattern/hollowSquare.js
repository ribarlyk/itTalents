let m = 5;
let n = 5;

for (let i = 0; i < m; i++) {
  let row = "";
  for (let k = 0; k < m; k++) {
    if (i != 0 && i != m - 1 && k != 0 && k != m - 1) {
      row += " ";
    } else {
      row += "*";
    }
  }

  console.log(row);
}
