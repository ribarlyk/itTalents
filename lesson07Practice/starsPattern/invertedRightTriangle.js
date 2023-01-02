let m = 5;
let n = 5;
let spaces = m - 1;
for (let i = 0; i < m; i++) {
  let result = "";
  for (let k = 0; k <= spaces; k++) {
    result += "*";
  }

  spaces--;

  console.log(result);
}
