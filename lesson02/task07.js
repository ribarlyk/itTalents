let a = 0;
let b = 5;
sum = "";
for (let i = 1; i <= b; i++) {
  if (sum === "") {
    sum += `${(a += 3)}`;
  } else {
    sum += "," + `${(a += 3)}`;
  }
}

console.log(sum);
