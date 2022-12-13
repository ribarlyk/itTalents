let start = 1;
let cycles = 5;
let result = "";

for (let i = 1; i <= cycles; i++) {
  for (let j = 1; j <= cycles; j++) {
    if (i === start || i === cycles) {
      result += start;
    } else {
      if (j === start || j === cycles) {
        result += start;
      } else {
        result += "0";
      }
    }
  }
  console.log(result);
  result = "";
}
