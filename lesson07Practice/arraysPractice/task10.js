let arr = [1, 2, 2, 3, 4, 4, 5];
let duplicates = [];

for (let i = 0; i < arr.length; i++) {
  for (let k = i + 1; k < arr.length; k++) {
    if (arr[i] === arr[k]) {
      duplicates.push(arr[i]);
    }
  }
}
console.log(duplicates);
