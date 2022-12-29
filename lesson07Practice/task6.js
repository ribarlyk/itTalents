function toggle(str) {
  const upperCase = [
    65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83,
    84, 85, 86, 87, 88, 89, 90,
  ];
  const lowerCase = [
    97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112,
    113, 114, 115, 116, 117, 118, 119, 120, 121, 122,
  ];

  let result = "";

  for (let i = 0; i < str.length; i++) {
    let asciiCode = str[i].charCodeAt();
    if (asciiCode >= 65 && asciiCode <= 90) {
      let index = upperCase.indexOf(asciiCode);
      result += String.fromCharCode(lowerCase[index]);
    } else {
      let index = lowerCase.indexOf(asciiCode);
      result += String.fromCharCode(upperCase[index]);
    }
  }
  return result;
}

console.log(toggle("camelCase"));
