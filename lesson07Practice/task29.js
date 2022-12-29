function removeWord(str, word) {
  let arr = str.split(" ");

  let index = arr.indexOf(word);

  arr.splice(index, 1);

  console.log(arr.join(" "));
}

removeWord("I love to code.", "to");
