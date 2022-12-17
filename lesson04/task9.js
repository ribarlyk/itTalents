/*let input = [2, 3, 7, -5];
let inputBackwards = [];

for (let i = input.length - 1; i >= 0; i--) {
  inputBackwards.push(input[i]);
}
console.log(input);*/

let input = [2, 3, 7, -5];

for (let i = 1; i <= 2; i++) {
  let counter = input.length - 1;
  let temp;
  let tempA;
  let tempB;
  for (let i = 0; i < input.length / 2; i++) {
    tempB = input[i];
    tempA = input[counter];
    temp = tempA;
    tempA = tempB;
    tempB = temp;
    input[i] = tempB;
    input[counter] = tempA;
    counter--;
  }
}
console.log(input);
