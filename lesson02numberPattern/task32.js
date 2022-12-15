let height = 5;
let result = "";
let counter = 1;
for (let i = 1; i <= height; i++) {
  for (let z = 1; z <= i; z++) {
    result += counter;
    counter++;
  }

  console.log(result);
  result = "";
  counter = i+1;
}
