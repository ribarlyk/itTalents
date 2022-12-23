let firstString = "pineapple";
let secondString = "pomegranate";
let longestString =
  firstString.length > secondString.length
    ? firstString.length
    : secondString.length;

if (
  typeof firstString === "string" &&
  firstString.length >= 7 &&
  firstString.length <= 20 &&
  typeof secondString === "string" &&
  secondString.length >= 7 &&
  secondString.length <= 20
) {
  let firstFive = firstString.slice(0, 5);
  let lastFirstFive = firstString.slice(5);
  let secondFive = secondString.slice(0, 5);
  let lastSecondFive = secondString.slice(5);

  console.log(
    longestString,
    firstFive + lastSecondFive,
    secondFive + lastFirstFive
  );
}
