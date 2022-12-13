let start = 1;
let cycles = 5;
let result = "";

for (let i = 1; i <= cycles; i++) {
  for (let j = 1; j <= cycles; j++) {
    if (i === 1 || i === 5) {
      if (j === 1 || j === 5) {
        result += "0";
      } else {
        result += start;
      }
    } else {
      if (j === 1 || j === 5) {
        result += start;
      } else {
        result += "0";
      }
    }
  }
  console.log(result);
  result = "";
}
