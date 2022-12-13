let start = 1;
let result = "";
let cycles = 5;

for (let i = 1; i <= cycles; i++) {
  for (let j = 1; j <= cycles; j++) {
    if (i === 1 || i === 5) {
      if (j === 1 || j === 5) {
        result += start;
      } else {
        result += "0";
      }
    } else if (i === 2 || i === 4) {
      if (j === 2 || j === 4) {
        result += start;
      } else {
        result += "0";
      }
    } else {
      if (j === 3) {
        result += start;
      } else {
        result += "0";
      }
    }
  }
  console.log(result);
  result = "";
}
