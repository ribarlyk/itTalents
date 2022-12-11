let valueOne = 4;
let valueTwo = 5;
let middleMan = null;

console.log(valueOne);
console.log(valueTwo);
console.log("------------");

middleMan = valueOne;
valueOne = valueTwo;
valueTwo = middleMan;

console.log(valueOne);
console.log(valueTwo);
