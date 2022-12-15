let height = 9
let result = "";
let counter = 1;

for (let i = 1; i <= height; i++) {
  i % 2 === 1 ? (counter = 1) : (counter = i);

  for (let k = 1; k <= i; k++) {
    if (i % 2 === 1) {
      result += counter;
      counter++;
    } else {
      result += counter;
      counter--;
    }
  }

  console.log(result);
  result = "";
}
