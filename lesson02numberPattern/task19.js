let height = 5;
let result = "";
let counter = 1;
for (let i = 1; i <= height; i++) {
  for (let k = 1; k <= height; k++) {
    result += counter+' ';
    counter++;
  }

  result += "\n";
}

console.log(result);
