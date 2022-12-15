let height = 5;
let result = "";
let counter = 5;
for (let i = 1; i <= height; i++) {
  for (let z = height; z >= i; z--) {
    result += z;
  }
  console.log(result);
  result = "";
}
