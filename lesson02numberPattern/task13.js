let start = 1;
let cycles = 5;
let result = "";
let counter = 1;
for (let i = 1; i <= cycles; i++) {
  for (let j = 1; j <= cycles; j++) {
    if (counter <= 10) {
      result += counter + "  ";
    } else {
      result += counter + " ";
    }
    counter++;
  }
  console.log(result);

  result = "";
}
