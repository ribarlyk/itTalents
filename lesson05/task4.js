let input = [0, 1, 0, 1, 1, 0];
let temp;
let newArr = [];

for (let i = 0; i < input.length; i++) {
  if (input[i] > 0) {
    newArr.push(input[i]);
  } else {
    newArr.unshift(input[i]);
  }
}

console.log(newArr);
