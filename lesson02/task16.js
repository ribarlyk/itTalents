let a = 10;
let b = 1233;

if (a < b) {
  for (a; a < b; b--) {
    if (b % 50 === 0) {
      console.log(b);
    }
  }
}
