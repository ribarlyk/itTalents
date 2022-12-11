let a = 22;
let b = 44444;
let c = 55555;

if (typeof a == "number" && typeof b == "number" && typeof c == "number") {
  if (a > b && a > c && c > b) {
    console.log(a);
    console.log(c);
    console.log(b);
  } else if (b > a && b > c && c > a) {
    console.log(b);
    console.log(c);
    console.log(a);
  } else if (b > a && b > c && c < a) {
    console.log(b);
    console.log(a);
    console.log(c);
  } else if (a > b && a > c && c > b) {
    console.log(a);
    console.log(c);
    console.log(b);
  } else if (c > a && c > b && b < a) {
    console.log(c);
    console.log(a);
    console.log(b);
  } else if (c > b && c > b && a < b) {
    console.log(c);
    console.log(b);
    console.log(a);
  }
}else{
  console.log('You can compare only numbers!')
}
