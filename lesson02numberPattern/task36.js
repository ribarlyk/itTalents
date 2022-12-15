let height = 5;
let result = "";
let counter = 1;
for (let i = 1; i <= height; i++) {
  for (let z = 1; z <= i; z++) {
    if (counter % 2 == 1) {
      result += 1;
    } else {
      result += 0;
    }
  }
  console.log(result);
  result='';
  counter++
}
