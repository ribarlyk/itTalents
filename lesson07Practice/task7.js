function charCounter(str) {
  let alphabetCounter = 0;
  let numberCounter = 0;
  let specialCounter = 0;

  for (let i = 0; i < str.length; i++) {
    let asciiCode = str[i].charCodeAt();
    if (
      (asciiCode >= 65 && asciiCode <= 90) ||
      (asciiCode >= 92 && asciiCode <= 122)
    ) {
      alphabetCounter++;
    } else if (asciiCode >= 48 && asciiCode <= 57) {
      numberCounter++;
    } else {
      specialCounter++;
    }
  }
  let total = alphabetCounter + numberCounter + specialCounter;

  return `Alphabets: ${alphabetCounter}\nNumbers: ${numberCounter}\nSpecials: ${specialCounter}\nTotal: ${total}\n`;
}

console.log(charCounter("I love programming."));
