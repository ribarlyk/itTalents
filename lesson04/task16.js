let input = [-1.12, -2.43, 3.1, 4.2, 0, 6.4, -7.5, 8.6, 9.1, -4];
let newArray = [];

for (let i = 0; i < input.length; i++) {
  if (-0.231 > input[i]) {
    newArray.push(i * i + 41.25);
  } else {
    newArray.push(input[i] * (i + 1));
  }
}
console.log(newArray);
let counter = 0;
let sum = 0;
for (let k = 1; k < newArray.length; k++) {
  if (newArray[k] != 0) {
    counter++;
    sum += newArray[k];
  }
}
console.log(sum / counter);
