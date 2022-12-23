let string = "супер яката задача";
let result = "";

for (let i = 0; i < string.length; i++) {
  if (i === 0) {
    result += string[i].toUpperCase();
    continue;
  } else if (string[i] === " ") {
    result += " " + string[i + 1].toUpperCase();
    i++;
    continue;
  }
  result += string[i];
}
console.log(result);
