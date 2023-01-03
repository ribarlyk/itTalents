function printNumbers(x) {
  if (x < 1) {
    return;
  }
  console.log(x);
  printNumbers(--x);
}
printNumbers(10);
