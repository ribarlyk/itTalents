let arr = [1, 2, 3, 1, 2, 3, 4, 5, 6];
let uniqueArr = [];

for (let i = 0; i < arr.length; i++) {
  if (i === 0) {
    uniqueArr.push(arr[i]);
  }
  if (!uniqueArr.includes(arr[i])) {
    uniqueArr.push(arr[i]);
  }
}

for (let k = 0; k < uniqueArr.length; k++) {
  console.log(uniqueArr[k]);
}
