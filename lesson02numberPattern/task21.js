let height = 5;
let counter = 5;
let result = "";
for (let i = 1; i <= height; i++) {
  for (let k = counter; k >= 1; k--) {
    result += counter;
  }
  console.log(result);
  counter--;
  result = "";
}
