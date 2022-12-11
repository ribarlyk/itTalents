let number = 1;
let counter = 1;
let result = "";

while (number <= 9) {
  while (counter <= 9) {
    if (result === "") {
      result += `${number}*${counter}`;
    } else {
      result += `; ${number}*${counter}`;
    }
    counter++;
  }
  console.log(result);
  number++;
  result = "";
  counter = number;
}
