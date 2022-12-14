let n = 3;
let result = "";
let start = n - 1;

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n; j++) {
    result += start + "";
  }
  console.log(result);
  start += 2;
  result = '';
}
