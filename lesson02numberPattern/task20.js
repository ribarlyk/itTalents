let height = 5;
let counter = 1;
let result = "";
for (let i = 1; i <= height; i++) {
  for (let k = 1; k <= i; k++) {
    result += counter;
  }
  console.log(result);
  counter++;
  result = "";
}
