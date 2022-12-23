function mergeArrays(arr1, arr2) {
  let mergedArray = [];

  if (Array.isArray(arr1) === true && Array.isArray(arr2) === true) {
    for (let i = 0; i < arr1.length; i++) {
      if (typeof arr1[i] === "number") {
        mergedArray.push(arr1[i]);
      }
    }
    
    for (let j = 0; j < arr2.length; j++) {
      if (typeof arr2[j] === "number") {
        mergedArray.push(arr2[j]);
      }
    }
  }

  console.log(mergedArray);
}

mergeArrays([1, 2, 3, 4, 5, 6, 7],[8, 9, 10, 11, 12, 13]);
