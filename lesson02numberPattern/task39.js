let height = 5;
let result = "";
let counter = 1;
for (let i = 1; i <= height; i++) {
  for (let z = 1; z <= counter; z++) {
    result += z;
  }

  console.log(result);
  result = "";
  counter += 2;
}
