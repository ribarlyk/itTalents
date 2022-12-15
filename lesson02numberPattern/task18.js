let n = 9// row or column count
// defining an empty string
let string = "";
let counter = 4;

for (let i = 0; i < n; i++) {
  // external loop
  for (let j = 0; j < n; j++) {
    // internal loop
    if (i === 0 || i === n - 1 ) {
      string += 5 + " ";
    } else {
      if (j === 0 || j === n - 1) {
        string += 5 + " ";
      } else if (i === 1 || i === n - 2) {
        string += 4 + " ";
      } else if (j === 1 || j === n - 2) {
        string += 4 + " ";
      } else if (i === 2 || i === n - 3) {
        string += 3 + " ";
      } else if (j === 2 || j === n - 3) {
        string += 3 + " ";
      } else if (i === 3 || i === n - 4) {
        string += 2 + " ";
      } else if (j === 3 || j === n - 4) {
        string += 2 + " ";
      } else if (i === 4 || i === n - 5) {
        string += 1 + " ";
      } else if (j === 4 || j === n - 5) {
        string += 1 + " ";
      }
    }
  }
  // newline after each row
  counter--;
  string += "\n";
}
// printing the string
console.log(string);
