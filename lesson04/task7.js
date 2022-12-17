let array = [2, 3, -11, 7];
let newArray = [];
for (let i = 0; i < array.length; i++) {
  if (array[i - 1] === undefined) {
    newArray.push(array[i + 1]);
    continue;
  } else if (array[i + 1] === undefined) {
    newArray.push(array[i - 1]);
    continue;
  }

  newArray.push(array[i - 1] + array[i + 1]);
}
console.log(newArray);
