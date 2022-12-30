function countElements(arr) {
  let oddCounter = 0;
  let evenCounter = 0;

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (element % 2 === 0) {
      evenCounter++;
    } else {
      oddCounter++;
    }
  }
  console.log(
`Total even elements: ${evenCounter}
Total odd elements: ${oddCounter}`
);

}

countElements([1, 2, 3, 4, 5, 6, 7, 8, 9]);
