let num = 1231;
let numToString = num.toString().split("");
let isZero = false;

for (let i = 0; i < numToString.length; i++) {
  if (numToString[i] == 0) {
    isZero = true;
  }
}

if (isZero) {
  console.log(`Yes ${num} has 0 in it`);
} else {
  console.log(`No ${num} has no 0 in it`);
}
