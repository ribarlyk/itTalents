let n = 4;
let b = n - 1;
let c = n - 1;

let result = "";
let resultOfTheNextN = "";
let sum = "";

for (let i = 1; i <= n; i++) {
  result += b + "";
}
console.log(result);

for (let i = 1; i < n; i++) {
  c += 2;
  for (let j = 1; j <= n; j++) {
    sum += c + "";
    resultOfTheNextN = sum;
  }
  sum = "";
  console.log(resultOfTheNextN);
}
