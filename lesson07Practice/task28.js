function totalOccurances(str, word) {
  let arr = str.split(" ");
  let counter = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === word || arr[i] === word + "." || arr[i] === word + ",") {
      counter++;
    }
  }
  console.log(`total occurances of ${word}: ${counter}`);
}
totalOccurances("I love programming. I love coding.", "programming");
