let input = [10, 3, 5, 8, 6, -3, 7];
let smallestElement = input[0];

for (let i = 1; i < input.length; i++) {
  if (input[i] % 3 === 0 && input[i] <= smallestElement) {
    {
      smallestElement = input[i];
    }
  }
}

console.log(smallestElement);
