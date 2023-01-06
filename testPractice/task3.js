/*Даден е масив от цели числа. Да се намери кои елементи са повече
- четни или нечетни и да се изведе в конзолата - “Четните числа са
повече” или “Нечетните числа са повече”, в зависимост от намерения
резултат. Използвайте рекурсия*/

let arr = [1, 2, 3, 4, 5, 6]
let oddCounter = 0;
let evenCounter = 0;

function numberChecker(arr, i = 0) {
    if (i === arr.length) {
        return;
    }
    if (arr[i] % 2 === 0) {
        evenCounter++;
    } else {
        oddCounter++;
    }
    console.log(evenCounter, oddCounter);
    return numberChecker(arr, i + 1);
}

numberChecker(arr);

if (evenCounter > oddCounter) {
    console.log(`chetnite sa poveche`);
} else if (evenCounter === oddCounter) {
    console.log(`ravni sa`);
} else {
    console.log(`nechetnite sa poveche`);
}
