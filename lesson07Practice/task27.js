function lastOccurance(str, word) {
  if (str.includes(word)) {
    let index = str.lastIndexOf(word);
    console.log(`last index: ${index}`);
  }
}
lastOccurance("I love programming. I love coding.", "love");
