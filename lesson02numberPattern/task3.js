let cycles = 5;
let number = 1;

for (let i = 1; i <= cycles; i++) {
  let result = "";
  for (let j = 1; j <= cycles; j++) {
    if (number === 1) {
      result += 0;
      number = 0;
    } else {
      result += 1;
      number = 1;
    }
  }
  number = 1;
  console.log(result);
}
