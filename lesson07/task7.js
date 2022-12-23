let input = "aaaaaa asd fg hjkl";
let arrayFromInput = input.split(" ");

let wordsLength = arrayFromInput.length;
let longestWordLength = 0;

for (let i = 0; i < arrayFromInput.length; i++) {
  if (arrayFromInput[i].length > longestWordLength) {
    longestWordLength = arrayFromInput[i].length;
  }
}

console.log(
  `${wordsLength} думи, най-дългата е с ${longestWordLength} символа`
);
