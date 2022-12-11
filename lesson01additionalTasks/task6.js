let hearts = String.fromCodePoint(0x2665);
let cubs = String.fromCodePoint(0x2663);
let spades = String.fromCodePoint(0x2660);
let diamonds = String.fromCodePoint(0x2666);

let suit = null;

if (suit == "hearts") {
  console.log(hearts);
} else if (suit == "cubs") {
  console.log(cubs);
} else if (suit == "diamonds") {
  console.log(diamonds);
} else if (suit == "spades") {
  console.log(spades);
} else {
  console.log("Not a suit!");
}
