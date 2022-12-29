function removeAllOcc(str, char) {
  let arr = str.split("");

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === char) {
      arr.splice(i, 1);
    }
  }
  console.log(arr.join(""));
}

removeAllOcc("I Love Programming", "r");
