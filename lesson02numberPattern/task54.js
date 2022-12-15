let height = 5;
let result = "";
let counter = 1;
let counterIt = 5;
for (let i = 1; i <= height; i++) {
  for (let k = counterIt; k >= 1; k--) {
    result += counter;
    counter++;
  }
  counter = i + 1;
  console.log(result);
  result = "";
  counterIt--;
}
