let height = 5;
let result = "";
let counter = 5;

for (let i = 1; i <= height; i++) {
  for (let k = 1; k <= i; k++) {
    result += counter;
  }

  console.log(result);
  result = "";
  counter--;
}
