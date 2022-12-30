let arr = [5, 10, 2, 5, 50, 5, 10, 1, 2, 2];
let uniques = [];
for (let i = 0; i < arr.length; i++) {
  let tempArr = [];
  if (!uniques.includes(arr[i])) {
    tempArr.push(arr[i]);
  }
  for (let k = i + 1; k < arr.length; k++) {
    if (arr[i] === arr[k] && !uniques.includes(arr[i])) {
      tempArr.push(arr[i]);
    }
  }
  if (tempArr.length !== 0) {
    console.log(`Frequency of ${arr[i]} = ${tempArr.length}`);
  }
  uniques.push(arr[i]);
}
