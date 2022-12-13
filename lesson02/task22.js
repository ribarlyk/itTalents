let number = 1;
let counter = 0;
let c = 1;
let followingNumber = "";
let newNumber = number + 1;

while (counter < 10) {
  if (newNumber % 2 === 0 || newNumber % 3 === 0 || newNumber % 5 === 0) {
    followingNumber === ""
      ? (followingNumber += `${c}:${newNumber}`)
      : (followingNumber += `, ${c}:${newNumber}`);
    counter++;
    c++;
  }

  newNumber++;
}
console.log(followingNumber);
