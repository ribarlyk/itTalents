let height = 5;
let result = "";
let even = 2;
let odd = 1;

for (let i = 1; i <= height; i++) {
  for (let z = 1; z <= i; z++) {
    if (i % 2 === 1) {
      result += odd;
      odd += 2;
    } else {
      result += even;
      even += 2;
    }
  }
  odd = 1;
  even = 2;
  console.log(result);
  result = "";
}
