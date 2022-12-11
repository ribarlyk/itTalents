let xa = 1;
let ya = -12;

if (xa !== 0 && ya !== 0) {
  if (xa > 0 && ya > 0) {
    console.log("Точка А се намира в първи квадрант.");
  } else if (xa > 0 && ya < 0) {
    console.log("Точка А се намира в втори квадрант.");
  } else if (xa < 0 && ya < 0) {
    console.log("Точка А се намира в трети квадрант.");
  } else if (xa < 0 && ya > 0) {
    console.log("Точка А се намира в четвърти квадрант.");
  }
} else {
  console.log("Toчка А се намира в центъра на осите");
}
