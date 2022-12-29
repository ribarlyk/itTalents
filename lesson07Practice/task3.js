function compare(strOne, strTwo) {
  let isMatch = false;
  if (strOne.length === strTwo.length) {
    for (let i = 0; i < strOne.length; i++) {
      if (strOne[i] !== strTwo[i]) {
        isMatch = false;
        break;
      } else {
        isMatch = true;
      }
    }
  }
  return isMatch;
}
const result = compare("apple", "apple");
console.log(result);
