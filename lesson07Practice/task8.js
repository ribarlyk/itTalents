function findVowels(str) {
  let vowels = [65, 97, 69, 101, 79, 111, 73, 105, 85, 117];
  let consonants = [
    66, 67, 68, 70, 71, 72, 74, 75, 76, 77, 78, 80, 81, 82, 83, 84, 86, 87, 88,
    89, 90, 98, 99, 100, 102, 103, 104, 106, 107, 108, 109, 110, 112, 113, 114,
    115, 116, 118, 119, 120, 121, 122,
  ];
  let vowelsCount = 0;
  let consonantsCount = 0;

  for (let i = 0; i < str.length; i++) {
    let asciiCode = str[i].charCodeAt();
    if (vowels.includes(asciiCode)) {
      vowelsCount++;
    } else if (consonants.includes(asciiCode)) {
      consonantsCount++;
    }
  }
  console.log(vowelsCount, consonantsCount);
}

findVowels("I love programming.");
