let name = "Anna Dosewa Asenowa, Georgi Ivanov Gonzo";
let namesArray = name.split(", ");

let nameOne = namesArray[0];
let nameTwo = namesArray[1];

let sumNameOne = 0;
let sumNameTwo = 0;

for (let i = 0; i < nameOne.length; i++) {
  sumNameOne += nameOne.charCodeAt(i);
}

for (let i = 0; i < nameTwo.length; i++) {
  sumNameTwo += nameTwo.charCodeAt(i);
}

console.log(sumNameOne, sumNameTwo);
console.log(sumNameOne > sumNameTwo ? nameOne : nameTwo);
