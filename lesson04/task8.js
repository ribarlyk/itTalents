let array = [2, 1, 1, 2, 3, 3, 2, 2, 2, 1, 4, 4, 4, 4, 6, 6, 6, 6, 6, 6, 6];
let tempArray = [];
let longestArrey = [];


for (let i = 0; i < array.length; i++) {
  if (array[i] === array[i + 1] || array[i] === array[i - 1]) {
    tempArray.push(array[i]);
  }
  if (tempArray.length > longestArrey.length) {
    longestArrey = tempArray;

    tempArray = [];
  }

  if (tempArray[0] !== array[i]) {
    tempArray = [];
  }
}
console.log(longestArrey);
