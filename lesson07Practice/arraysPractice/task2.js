let arr = [1, 2, 3];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}

console.log(Math.floor(sum / arr.length));
