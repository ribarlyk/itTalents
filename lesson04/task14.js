let input = [7.1, 8.5, 0.2, 3.7, 0.99, 1.4, -3.5, -110, 212, 341, 1.2];
let newArray = [];
for (let i = 0; i < input.length; i++) {
  if (input[i] >= -2.99 && input[i] <= 2.99) {
    newArray.push(input[i]);
  }
}
console.log(newArray);
