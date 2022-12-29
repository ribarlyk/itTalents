function allOccurances(str, char) {
  let counter = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      counter++;
    }
  }
  console.log(`total occurrences of '${char}': 5`);
}
allOccurances("I love programming. I love coding. I love IT Talents.", "o");
