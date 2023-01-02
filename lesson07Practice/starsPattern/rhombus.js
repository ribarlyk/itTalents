let m = 5;
let spaces = m - 1;
for (let i = 0; i < m; i++) {
  let rhomb = "";
  for (let k = 0; k < spaces; k++) {
    rhomb += " ";
  }
  for (let z = 0; z < m; z++) {
    rhomb += "*";
  }
  spaces--;
  console.log(rhomb);
}
