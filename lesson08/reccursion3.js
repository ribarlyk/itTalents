function printNumbers(x) {
  if (x > 10) {
    return;
  }
  if (Math.abs(x % 2) === 1) {
    console.log(x);
  }
  printNumbers(x + 1);
}
printNumbers(-10);
