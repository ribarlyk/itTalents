let input = "asd-12sdf45-56asdf100";
let arrayOfNumbers = [];

for (let i = 1; i < input.length; i++) {
  if (input[i].charCodeAt() >= 48 && input[i].charCodeAt() <= 57) {
    arrayOfNumbers.push(input[i]);
    continue;
  } else if (
    input[i - 1].charCodeAt() >= 48 &&
    input[i - 1].charCodeAt() <= 57
  ) {
    arrayOfNumbers.push("|");
  }
  if (input[i].charCodeAt() === 45) {
    arrayOfNumbers.push("-");
  }
}

let sum = 0;
arrayOfNumbers = arrayOfNumbers.join("").split("|");

for (let k = 0; k < arrayOfNumbers.length; k++) {
  console.log(Number(arrayOfNumbers[k]));
  sum += Number(arrayOfNumbers[k]);
}

console.log(`Сума = ${sum}`);
