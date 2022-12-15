let height = 9;
let result = "";
let spaces = height - 1;
let counterStart = 1;
let counterLeftSide = 1;
let counterRightSide = 1;


for (let i = 1; i <= height; i++) {
  for (let k = 1; k <= i; k++) {
    result += counterLeftSide;
    counterLeftSide++;
  }

  for (let k = 1; k <= spaces * 2; k++) {
    result += " ";
  }
  for (let s = 1; s <= counterStart; s++) {
    result += counterRightSide;
    counterRightSide--;
  }

  console.log(result);
  spaces--;
  counterStart++;
  result = "";
  counterRightSide = i + 1;
  counterLeftSide = 1;
}
