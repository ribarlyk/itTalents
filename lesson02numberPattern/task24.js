let height = 5;
let result = "";
let counter = 1;

for (let i = 1; i <= height; i++) {
  for (let k = 1; k <= i; k++) {
    if (i < k) {
      result += 1;
    } else {
      result += counter;
      counter++;
    }
  }

  console.log(result);
  counter = 1;
  result = "";
}
