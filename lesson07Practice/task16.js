function maxOccurance(str) {
  let maxCount = 0;
  let char = "";
  for (let i = 0; i < str.length; i++) {
    let tempCount = 0;
    for (let k = 0; k < str.length; k++) {
      if (str[i] === str[k] && str[i].charCodeAt() != 32) {
        tempCount++;
      }
      if (tempCount > maxCount) {
        maxCount = tempCount;
        char = str[i];
      }
    }
  }
  console.log(`Output maximum occurring character: '${char}'`);
}
maxOccurance("I want to be Java programmer.");
