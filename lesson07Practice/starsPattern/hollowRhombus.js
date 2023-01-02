let height = 5;
let spaces = height - 1;

for (let row = 0; row < height; row++) {
  let result = "";
  for (let i = 0; i < spaces; i++) {
    result += " ";
  }
  for (let star = 0; star < height; star++) {
    if (row === 0 || row === height - 1) {
      result += "@";
    } else {
      if (star === 0 || star === height - 1) {
        result += "@";
      } else {
        result += " ";
      }
    }
  }
  console.log(result);
  spaces--;
}
