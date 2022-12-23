let apple = "apple";
let pineapple = "zzppple";
let index = null;
let indexTwo = null;
let spaces = "";
for (let i = 0; i < pineapple.length; i++) {
  if (apple.includes(pineapple[i])) {
    index = apple.indexOf(pineapple[i]);
    indexTwo = i;
    break;
  }
}
if (index != null) {
  console.log(indexTwo);
  for (let o = 0; o < apple.length; o++) {
    let spaces = "";
    if (o === index) {
      console.log((apple[o] = pineapple));
      continue;
    }
    for (let i = 0; i < indexTwo; i++) {
      spaces += " ";
    }
    console.log(spaces + apple[o]);
  }
} else {
  console.log(`no match`);
}
