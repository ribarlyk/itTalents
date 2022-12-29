function replaceFirstChar(str, char, charReplacer) {
  let arr = str.split("");
  let index = arr.indexOf(char);
  arr.splice(index, 1, charReplacer);

  console.log(arr.join(""));
}

replaceFirstChar("I love programming.", "o", "y");
