function printNumbers(a, b) {
  let sum = "";
  if (b < 1) {
    return;
  }
  console.log((sum += a + ", "));
  printNumbers(a + 3, b - 1);
}
printNumbers(3, 5);
