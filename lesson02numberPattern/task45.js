let height = 5;
let result = "";
let counter = 1;
for (let i = 1; i <= height; i++) {
  for (let z = 1; z <= i; z++) {
    if (counter > 10) {
      result += counter + " ";
    } else {
      result += counter + "  ";
    }
    counter++;
  }
  console.log(result);
  result = "";
}
