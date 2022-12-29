function removeFirstOcc(str, char) {
  let arr = str.split("");
  let index = arr.indexOf(char);
  arr.splice(index, 1);
  console.log(arr.join(""));
}
removeFirstOcc("I Love Programming", "I");
