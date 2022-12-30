let arr = [1, 2, 3, 4, 5, 1, 2];

for (let i = 0; i < arr.length; i++) {
  for (let k = i + 1; k < arr.length; k++) {
    if (arr[i] === arr[k]) {
      arr.splice(k, 1);
    }
  }
}
console.log(arr);
