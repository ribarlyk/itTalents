let height = 5;
let result = "";
let counter = 1;
let numberCounter = 1;
let secondCounter = 7;
for (let i = 1; i <= height; i++) {
  for (let z = 1; z <= counter; z++) {
    result += numberCounter;
    numberCounter++;
  }
  console.log(result);

  counter += 2;
  numberCounter = 1;
  result = "";
}

for (let i = 1; i <= height; i++) {
  for (let k = secondCounter; k >= 1; k--) {
    result += numberCounter;
    numberCounter++;
  }
  console.log(result);
  secondCounter -= 2;
  numberCounter = 1;
  result = "";
}
