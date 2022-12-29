function minCharOccurance(str) {
  let char = "";
  let charCounter = str.length;

  for (let i = 0; i < str.length; i++) {
    let tempCounter = 0;

    for (let k = 0; k < str.length; k++) {
      if (str[i] === str[k] && str[i].charCodeAt() != 32) {
        tempCounter++;
      }
    }
    if (tempCounter < charCounter && tempCounter != 0) {
      charCounter = tempCounter;
      char = str[i];
    }
  }
  console.log(`Output lowest frequency: '${char}' = ${charCounter}`);
}
minCharOccurance("I love Java programming!");
