let num = 1;
let cardNumber;
let result = "";

for (let i = num; i <= 52; i++) {
  let card = i % 4;
  let suit;
  let cardNumber = Math.ceil(i / 4) + 1;
  
   switch (card) {
    case 1:
      suit = "спатия";
      break;
    case 2:
      suit = "каро";
      break;
    case 3:
      suit = "купа";
      break;
    case 0:
      suit = "пика";
      break;
  }
  if (cardNumber === 11) {
     result === "" ? (result += `Вале ${suit}`) : (result += `, Вале ${suit}`);
  } else if (cardNumber === 12) {
     result === "" ? (result += `Дама ${suit}`) : (result += `, Дама ${suit}`);
  } else if (cardNumber === 13) {
     result === "" ? (result += `Поп ${suit}`) : (result += `, Поп ${suit}`);
  } else if (cardNumber === 14) {
     result === "" ? (result += `Асо ${suit}`) : (result += `, Асо ${suit}`);
  } else if (cardNumber !== 1 && cardNumber <= 13) {
     result === ""? (result += `${cardNumber} ${suit}`): (result += `, ${cardNumber} ${suit}`);
  }
  
}
console.log(result);
