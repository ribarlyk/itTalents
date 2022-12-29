function reverseString(str) {
  let arrayOfString = str.split(" ");
  let reversedStr = [];
  for (let i = arrayOfString.length - 1; i >= 0; i--) {
    reversedStr.push(arrayOfString[i]);
  }

  console.log(reversedStr.join(" "));
}

reverseString("I love programming and learning Java");
