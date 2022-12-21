let arr = [1, 0, 1, 1, 1, 1, 0, 0, 0, 1];
let newArr = [];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 0) {
    newArr.push(arr[i]);
  } else {
    newArr.unshift(arr[i]);
  }
}

console.log(newArr);
