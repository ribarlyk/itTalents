let arr = ["@", "#", ",", "*"];
let ch = "!";
let index = -1;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === ch) {
    index = i;
  }
}

index === -1
  ? console.log(`Character doesn't exist`)
  : console.log(`Character is on index : ${index}`);
