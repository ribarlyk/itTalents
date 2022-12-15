let height = 5;
let result = "";
let counter = 1;
let counterTwo =5;
for (let i = 1; i < height; i++) {
  for (let k = 1; k <= i; k++) {
    result += counter;
    counter++;
  }
  result += "\n";
  counter = 1;
}
for (let i = 1; i <= height; i++) {
  for (let z = 1; z <= counterTwo; z++) {
    result += counter;
    counter++;
  }
  counterTwo --;
  counter = 1;
  result += "\n";
}
console.log(result);
