let number = 1;
let arr = [1, 1];
let result = number;
for (let i = 2; i < 10; i++) {
  arr.push(arr[i - 2] + arr[i - 1]);
}

console.log(arr);
