let array = [1, 2, 1, 2, 1, 2, 1, 2];
let isZigzag = true;
for (let i = 1; i < array.length - 1; i++) {
  let isDescending = array[i] >= array[i - 1] && array[i] <= array[i + 1];
  let isAscending = array[i] <= array[i - 1] && array[i] >= array[i + 1];

  if (isDescending || isAscending) {
    isZigzag = false;
  }
}

console.log(isZigzag);
