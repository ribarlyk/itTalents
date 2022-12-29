function replaceAll(str, char, charReplacer) {
  str = str.replaceAll(char, charReplacer);
  console.log(str);
}
replaceAll("I love Java programming!", "a", "x");
