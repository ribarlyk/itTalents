let start = 5;
let cycles = 5;
let result = "";
let counter = 1;
for (let i = 1; i <= 5; i++) {
  for (let k = 5; k >= 1; k--) {
    if (counter >=6) {
      result += k;
    } else {
      result += counter;
    }
    counter++;
  }
  console.log(result);
  result = "";

  counter = i + 1;
}
