let height = 5;
let result = "";
let counter = 1;
for (let i = 1; i <= height; i++) {
  for (let k = 5; k >= i; k--) {
    result += counter;
    counter++;
  }
  counter = 1;
  console.log(result);
  result = "";
}
