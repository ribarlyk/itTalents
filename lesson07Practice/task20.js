function removeLastOcc(str, char) {
  let arr = str.split("");
  let index = arr.lastIndexOf(char);
  arr.splice(index, 1);

  console.log(arr.join(""));
}
removeLastOcc("I Love Programming", "g");
