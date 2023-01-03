function printNumbers(x) {
  if (x >= 51) {
    return;
  }
  console.log(x);
  printNumbers(++x);
}

printNumbers(-20);
