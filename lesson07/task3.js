let string = "хипопотам";
let stringTwo = "хипопотуk";
let differentChars = "";

if (string.length === stringTwo.length) {
  console.log("Двата низа са с равна дължина.");
  for (let i = 0; i <= string.length; i++) {
    if (string[i] != stringTwo[i]) {
      differentChars += `${i + 1} ${string[i]}-${stringTwo[i]}\n`;
    }
  }
  console.log("Разлика по позиции:");
  console.log(differentChars);
} else {
  console.log("Двата низа не са с равна дължина.");
}
