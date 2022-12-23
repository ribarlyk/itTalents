let input = "Hello";
let newString = "";
for (let i = 0; i < input.length; i++) {
  let temp = 0;
  temp = input[i].charCodeAt() + 5;
  newString += String.fromCharCode(temp);
}

console.log(newString);
