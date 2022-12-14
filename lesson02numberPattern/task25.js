let height = 5;
let result = "";
let counter = 1;
let secondCounter = 5;
for (let i = 1; i <= height; i++) {
  for (let k = secondCounter; k >= 1; k--) {
    result += counter;
    counter++;
  }

  console.log(result);
  counter = 1;
  result = "";
  secondCounter--;
}
