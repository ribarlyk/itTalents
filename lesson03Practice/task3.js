/*
Task3. Write a program that prints all numbers from A to B that can be divided by 3. A and B -
from
* operator from console. Numbers must be in ascending order.*/

//check if a or b is bigger
//pass throught them
// check if it is dividable by 3;

let a = 3;
let b = 2212;

let min = Math.min(a, b);
let max = Math.max(a, b);

for (let i = min; i <= max; i++) {
  if (i % 3 === 0) {
    console.log(i);
  }
}
