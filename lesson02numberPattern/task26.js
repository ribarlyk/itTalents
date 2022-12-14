let height = 5;
let result = "";
let counter = 5;

for (let i = 1; i <= height; i++) {
  for (let k = 1; k <= i; k++) {
    if (i < k) {
      result += i;
    } else {
      result += counter;
      counter--;
    }
  }

  console.log(result);
  counter = 5;
  result = "";
}
