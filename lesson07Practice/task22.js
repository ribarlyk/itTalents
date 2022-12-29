function removeRepChars(str) {
  let arr = str.split("");
  for (let i = 0; i < arr.length; i++) {
    for (let k = i + 1; k < arr.length; k++) {
      if (arr[i] === arr[k]) {
        arr.splice(k, 1);
      }
    }
  }
  console.log(arr.join(""));
}

removeRepChars("Programming in Java!");
