let input = [
  [true, true, true],
  [true, true, true],
  [true, true, true],
];

for (let i = 0; i < input.length; i++) {
  for (let k = 0; k < input.length; k++) {
    if (k < i) {
      if (input[i][k] === true) {
        console.log("qko");
      }
    }
  }
}
