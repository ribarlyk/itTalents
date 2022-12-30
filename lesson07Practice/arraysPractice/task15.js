let arr = [1, 2, 3, 4, 5, 6];
let target = 5;
let pairs = [];

for (let i = 0; i < arr.length; i++) {
  for (let k = i + 1; k < arr.length; k++) {
    if (arr[i] + arr[k] === target) {
      pairs.push(new Array(arr[i], arr[k]));
    }
  }
}
console.log(pairs);
