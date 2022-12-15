let height = 5;
let result = "";
let counter = 5;
for (let i = 1; i <= height; i++) {
  for (let j = 1; j <= i; j++) {
    result += counter;
    counter++;
  }

  counter = 5 - i;
  console.log(result);
  result = "";
}
