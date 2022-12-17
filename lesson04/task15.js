let input = [7.13, 0.2, 4.9, -5.1, 6.34, 1.12];
let first = 0;
let second = 0;
let third = 0;
let highestNumbersArray = [];

for (let i = 0; i < input.length; i++) {
  if (Math.abs(input[i]) > first) {
    third = second;
    second = first;
    first = Math.abs(input[i]);
  } else if (Math.abs(input[i]) > second && input[i] != second) {
    third = second;
    second = Math.abs(input[i]);
  } else if (Math.abs(input[i]) > third && input[i] != third) {
    third = Math.abs(input[i]);
  }
}
highestNumbersArray.push(third, second, first);
console.log(highestNumbersArray);
