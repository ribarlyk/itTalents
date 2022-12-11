let a = 5;
let b = 2;
let c = 5;

if (a > 0 && b > 0 && c > 0) {
  if (a + b > c && a + c > b && b + c > a) {
    console.log("Yes it is possible to be a triangle.");
  } else {
    console.log("It is not possible to ba a triangle");
  }
} else {
  console.log("Invalid input");
}
