let number = 1;

let hearts = String.fromCodePoint(0x2665);
let cubs = String.fromCodePoint(0x2663);
let spades = String.fromCodePoint(0x2660);
let diamonds = String.fromCodePoint(0x2666);

let card = "";
let suit = "";

if (number <= 13) {
  suit = cubs;
  card = (number % 13) + 1;
} else if (number <= 26) {
  suit = diamonds;
  card = (number % 13) + 1;
} else if (number <= 39) {
  suit = hearts;
  card = (number % 13) + 1;
} else {
  suit = spades;
  card = (number % 13) + 1;
}

if (card === 1) {
  card = "A";
} else if (card === 13) {
  card = "K";
} else if (card === 12) {
  card = "Q";
} else if (card === 11) {
  card = "J";
}

console.log(card, suit);
