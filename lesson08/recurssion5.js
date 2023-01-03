function printNumbers(a, b) {
  if (a > b) {
    return 
  }
  console.log(a);
  printNumbers(a + 1, b);
}
printNumbers(12, 15);
