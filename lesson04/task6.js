let firstArray = [13, 2, 7];
let secondArray = [13, 2, 7];

let isLengthSame = false;
let areElementsSame = true;
if (firstArray.length === secondArray.length) {
  isLengthSame = true;
}

if (!isLengthSame) {
  console.log(`Масивите са различни.`);
  console.log(`Масивите имат различен размер .`);
} else {
  for (let i = 1; i < firstArray.length; i++) {
    if (firstArray[i] !== secondArray[i]) {
      areElementsSame = false;
    } else {
      areElementsSame = true;
    }
  }
  if (areElementsSame && isLengthSame) {
    console.log(`Масивите са еднакви.`);
    console.log(`Масивите имат равен размер .`);
  } else if (!areElementsSame && isLengthSame) {
    console.log(`Масивите  не са еднакви.`);
    console.log(`Масивите имат равен размер .`);
  } else if (areElementsSame && !isLengthSame) {
    console.log(`Масивите са еднакви.`);
    console.log(`Масивите имат различен размер .`);
  }
}
