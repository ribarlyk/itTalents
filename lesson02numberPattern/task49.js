let height = 5;
let result = "";
let counter = 1;
let counterTwo = 6;
let counteThree = 10;
let counteFour = 13;

for (let i = 1; i <= height; i++) {
  for (let k = 1; k <= i; k++) {
    if (k % 2 === 1 && k < 3) {
      result += counter + " ";
      counter++;
    } else if (k % 2 === 0 && k <= 2) {
      result += counterTwo + " ";
      counterTwo++;
    } else if (k % 2 === 1 && k < 4) {
      result += counteThree + " ";
      counteThree++;
    } else if (k % 2 === 0 && k <= 5) {
      result += counteFour + " ";
      counteFour++;
    } else if (k % 2 === 1 && k < 6) {
      result += 15 + " ";
    }
  }
  console.log(result);
  result = "";
}
