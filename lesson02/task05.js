let a = 101;
let b = 25;

if (a < b) {
  for (let i = a; i <= b; i++) {
    console.log(i);
  }
} else if (b < a) {
  for (let i = b; i <= a; i++) {
    console.log(i);
  }
} else {
  console.log("Numbers are equal");
}
