let num = 1234;
let numbersSplitted = num.toString().split("");

let thousands = Number(numbersSplitted.shift());
let hundreds = Number(numbersSplitted.shift());
let decimals = Number(numbersSplitted.shift());
let ones = Number(numbersSplitted.shift());

console.log(thousands);
console.log(hundreds);
console.log(decimals);
console.log(ones);
