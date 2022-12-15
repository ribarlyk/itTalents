let height = 5;
let result = "";
let counter = 1;
let anotherCounter = 0;
for (let i = 1; i <= height; i++) {
  for (let z = height; z >= i; z--) {
    result += counter;
    counter += 2;
  }

  console.log(result);
  result = "";
  counter = i * 2 + 1;
}
