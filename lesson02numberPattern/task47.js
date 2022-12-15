let height = 5;
let width = 1;
let result = "";
let counter = 1;

for (let i = 1; i <= height; i++) {
  for (let k = 1; k <= width; k++) {
    if (counter > 9) {
      counter = 1;
    }
    result += counter;
    counter++;
  }
  console.log(result);

  result = "";
  width = width * 2;
}
