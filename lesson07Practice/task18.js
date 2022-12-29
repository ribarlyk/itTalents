function frqOfChar(str) {
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    let char = "";
    let counter = "";
    for (let z = 0; z < str.length; z++) {
      if (str[i] === str[z]) {
        arr.push(char);
        if (!arr.includes(str[i])) {
          char = str[i];
        }
        counter++;
      }
    }
    if (char != "") {
      console.log(`${char} = ${counter}`);
    }
  }
}
frqOfChar("MonkeyBussines");
