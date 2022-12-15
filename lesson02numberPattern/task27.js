let height = 5;
let result = "";
let counter = 5;
let loopCounter = 5;
for (let i = 1; i <= height; i++) {
  for (let z = height; z >= i; z--) {
    result += counter;
    counter--;
  }
  console.log(result);
  counter = 5 - i;
  result = "";
}
