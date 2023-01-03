function printNumbers(x) {
  if (x >= 101) {
    return;
  }
  console.log(x);
  printNumbers(x + 1);
}

printNumbers(1);
