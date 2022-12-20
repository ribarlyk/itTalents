let input = [1, 3, 2, 4, 3, 7];
let isZigZag = false;

for (let i = 0; i < input.length; i++) {
  if (i % 2 === 0) {
    if (input[i] < input[i + 1]) {
      isZigZag = true;
    } else {
      isZigZag = false;
      break;
    }
  } else if (i % 2 === 1) {
    if (input[i + 1] === undefined) {
      break;
    }
    if (input[i] > input[i + 1]) {
      isZigZag = true;
    } else {
      isZigZag = false;
      break;
    }
  }
}
console.log(isZigZag);
