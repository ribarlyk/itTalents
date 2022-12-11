let noun = "dog";
let number = 1;
if (typeof noun == "string" && typeof number == "number" && number >= 1) {
  if (number > 1) {
    noun += "s";
  }

  console.log(`${number} ${noun}`);
} else {
  console.log("False input!");
}
