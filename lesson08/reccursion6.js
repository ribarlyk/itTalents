function sumNumbers(x) {
  if (x <= 1) {
    return 0;
  }
  return x + sumNumbers(x - 1);
}
console.log(sumNumbers(7));
