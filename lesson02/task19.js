let num = 12;
let sum = 0;
if (num % 2 === 0) {
  sum = num * 0.5;
} else {
  sum = num * 3 + 1;
}
while (sum !== 1) {
  if (sum % 2 === 0) {
    sum = sum * 0.5;
  } else {
    sum = sum * 3 + 1;
  }
  console.log(sum);
}
