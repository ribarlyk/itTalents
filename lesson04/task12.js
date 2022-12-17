let input = [1, 2, 3, 4, 5, 6, 7];

a = input[0];
let b = input[1];
let c = a;
a = b;
b = c;
input[0] = a;
input[1] = b;
console.log(input);  //чрез трета променлива

let sum = input[2] + input[3];
input[2] = sum - input[2];
input[3] = sum - input[3];
console.log(input);   //чрез събиране

let sumTwo = input[4] * input[5];
input[4] = sumTwo / input[4];
input[5] = sumTwo / input[5];
console.log(input);      //чрез умножение
