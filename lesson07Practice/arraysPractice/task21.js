function separate(arr) {
  let oddArray = [];
  let evenArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenArray.push(arr[i]);
    } else {
      oddArray.push(arr[i]);
    }
  }
  console.log(evenArray);
  console.log(oddArray);
}
separate([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
