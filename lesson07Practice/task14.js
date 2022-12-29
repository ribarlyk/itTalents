function findChars(str, char) {
  let index = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      index.push(i);
    }
  }

  console.log(`Output '${char}' found at: ${index.join(", ")}`);
}

findChars("I love programming. I love Java.", "o");
