let input = [1, 2, 3, 4, 5, 6, 7];
let sum = 0;
for (let i = 0; i < input.length; i++) {
  sum += input[i];
}

let average = Math.round(sum / input.length);

let near;
for (let i = 0; i < input.length; i++) {
  if (average === input[i]) {
    near = input[i];
  }
}
console.log(near);
