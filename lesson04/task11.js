let input = [-23, -55, 17, 75, 56, 105, 134, 5, 10];

for (let i = 0; i < input.length; i++) {
  if (input[i] % 5 === 0 && input[i] > 5) {
    console.log(input[i]);
  }
}
