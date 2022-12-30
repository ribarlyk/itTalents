let arr = [11, 2, 3, 4, 5, 6, 1];
let highest = 0;
let lowest = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > highest) {
    highest = arr[i];
  }
}
console.log(highest);

for (let k = 0; k < arr.length; k++) {
  if (arr[k] < highest) {
    highest = arr[k];
    lowest = highest;
  }
}
console.log(lowest);
