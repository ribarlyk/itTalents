function replaceLastChar(str, char, charReplacer) {
  let arr = str.split("");
  let index = arr.lastIndexOf(char);
  arr.splice(index, 1, charReplacer);

  console.log(arr.join(""));
}

replaceLastChar("I love programming.", "m", "x");
