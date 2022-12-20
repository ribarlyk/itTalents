let input = [1, 2, 3, 4, 5, 6];
let symbol = 5;
let isExist = false;
let index = "";
for (let i = 0; i < input.length; i++) {
  if (input[i] === symbol) {
    isExist = true;
    index = i;
  }
}
isExist === true
  ? console.log(`yes it os on ${index}`)
  : console.log(`${symbol} doesnt exist.`);
