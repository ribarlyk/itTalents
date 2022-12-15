let height = 5;
let result = "";
counter = 1;
for (let i = 1; i <= height; i++) {
  for (z = height; z >= i; z--) {
    result += counter;
    counter++;
  }
  console.log(result);
  counter = i + 1;
  result = "";
}
