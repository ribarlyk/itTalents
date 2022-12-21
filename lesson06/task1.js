let array = [1, 2, 3, 4, 5, 6];
let isAllPostive = true;

for (let i = 0; i < array.length; i++) {
  if (array[i] < 0) {
    isAllPostive = false;
  }
}

console.log(isAllPostive);
