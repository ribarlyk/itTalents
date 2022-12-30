function highestNumber(arr) {
  let highest = 0;
  let secondHighest = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > highest) {
      secondHighest = highest;
      highest = arr[i];
    }
  }

  return `The second highest numbers is: ${secondHighest}`;
}
console.log(highestNumber([1, 2, 3, 4, 5]));
