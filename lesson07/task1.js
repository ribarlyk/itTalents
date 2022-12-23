function upperLowerCase(input) {
  let splittedInput = input.split(" ");
  let firstString = splittedInput[0];
  let secondString = splittedInput[1];
  let result = "";

  if (typeof input != "string") {
    console.log("Not a valid string");
    return null;
  }

  return (result =
    firstString.toUpperCase() +
    " " +
    firstString.toLowerCase() +
    " " +
    secondString.toUpperCase() +
    " " +
    secondString.toLowerCase());
}

let output = upperLowerCase("Abcd Efgh");
console.log(output);
