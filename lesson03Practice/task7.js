/*Task7. Write a program that reads a number and prints a triangle of stars with the height of
 * the number.*/

//draw on paper
// try to find  corelations

let row = 5;

for (let i = 1; i <= 5; i++) {
  let result = "";
  let star = i * 2 - 1;
  let spaces = (row * 2 - 1 - star) / 2;
  for (let j = spaces; j > 0; j--) {
    result += " ";
  }
  for (let z = 1; z <= star; z++) {
    result += "*";
  }
  console.log(result);
}
