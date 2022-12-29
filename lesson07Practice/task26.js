function wordOccurance(str, word) {
  if (str.includes(word)) {
    let index = str.indexOf(word);
    console.log(`${word} is present at index ${index}.`);
  }
}
wordOccurance("I love programming!", "love");
