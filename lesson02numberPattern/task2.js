let cycles = 5;
let number = 1;

for (let i = 1; i <= cycles; i++) {
  let result = "";

  for (let j = 1; j <= cycles; j++) {
    number === 1 ? (result += 1) : (result += 0);
  }
  number = number === 1 ? 0 : 1;
  console.log(result);
}
