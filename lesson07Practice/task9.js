function wordCounter(str) {
  let space = 32;
  let wordsCounter = 1;
  for (let i = 0; i < str.length; i++) {
    let asciiCode = str[i].charCodeAt();
    if (asciiCode === space) {
      wordsCounter++;
    }
  }
  return wordsCounter;
}

console.log(wordCounter("I love Java programming more then cooking"));
