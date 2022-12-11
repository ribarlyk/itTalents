let n = 12;
let star = "*";
let spaces = n - 1;
let result = "";
for (let i = 0; i < n; i++) {
  for (let j = 0; j <= spaces; j++) {
    result += " ";
  }
  spaces--;
  result += star;
  console.log(result);
  result = "";
  star += "**";
}
