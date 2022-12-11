let a = 1;
let b = 222;
let result = "";
let sum = 0;

for (let i = a; i <= b; i++) {
  if (i % 3 === 0 && i > 0 && (i * i) % 3 === 0) {
    result += `, skip ${i}`;
  } else {
    result === "" ? (result += `${i * i}`) : (result += `, ${i * i}`);
    sum += i * i;
  }

  if (sum > 200) {
    break;
  }
}
console.log(result);
