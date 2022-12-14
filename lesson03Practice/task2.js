/*Task2. Write a program that prints all odd numbers between 0 and 50 and all even numbers
 * between 51 and 100.*/

//reapeat search from 0-100
//check 0-50 for odd
// check 51-100 for even

for (let i = 0; i <= 100; i++) {
  if (i % 2 == 1 && i <= 50) {
    console.log(i);
  } else if (i % 2 === 0 && i > 50) {
    console.log(i);
  }
}
