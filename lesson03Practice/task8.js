/* Task8. Modify task 8 to print a triangle that is hollow and has only a frame of stars.*/

let row = 7;
let column = row * 2 - 1;
let result = "";
for (let i = 1; i <= 7; i++) {
  for (let j = 1; j <= column; j++) {
    if (j === row + i - 1 || j === row - i + 1 || i === row) {
      result += "*";
    } else {
      result += " ";
    }
  }
  console.log(result);
  result = "";
}
