let start = 1;
let result = "";
let cycles = 9;

for (let i = 1; i <= cycles; i++) {
  for (let j = 1; j <= cycles; j++) {
    if (i !== Math.ceil(cycles / 2)) {
      result += start;
    } else {
      if (j !== Math.ceil(cycles / 2)) {
        result += start;
      } else {
        result += "0";
      }
    }
  }
  console.log(result);
  result = "";
}
