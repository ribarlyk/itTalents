let height = 5;
let result = "";

for (let i = 1; i <= height; i++) {
  for (let z = 1; z <= i; z++) {
    if (i === 3 && z === 2) {
      result += 0;
    } else if (i === 4 && (z === 2 || z === 3)) {
      result += 0;
    } else {
      result += 1;
    }
  }
  console.log(result);
  result = "";
}
