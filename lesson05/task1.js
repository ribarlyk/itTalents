let input = [1, 2, 3, 4, 5, 6, -7];

let isPositive = true;
for (let i = 0; i < input.length; i++) {
  if (input[i] < 0) {
    isPositive = false;
  }
}
console.log(isPositive);
