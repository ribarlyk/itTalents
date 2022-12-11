let num = 12;
let result = 0;
for (let i = 100; i <= 999; i++) {
  let hundreds = Math.floor(i / 100);
  let tens = Math.floor((i % 100) / 10);
  let ones = Math.floor(i % 10);

  result += hundreds + tens + ones;

  if (result === num) {
    console.log(result);
    console.log(i);
  }
  result = 0;
}
