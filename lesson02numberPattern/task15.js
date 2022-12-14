let start = 5;
let cycles = 5;
let result = "";
let counter = 1;
for (let i = 1; i <= 5; i++) {
  for (let k = 1; k <= 5; k++) {
    if (counter > 5) {
      result += 5;
    } else {
      result += counter;
    }
    counter++;
  }
  console.log(result);
  result = "";

  counter = i + 1;
}
