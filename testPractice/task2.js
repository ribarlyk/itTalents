/*Да се напише програма, която преобразува текст от следния вид:
“Today is Friday and its very hot” в текст от вида “today-is-friday-and”.
Програмата работи по следното правило: Ако във входния текст
най-дългата дума има повече от 6 символа, резултатът се ограничава до
максимум 3 думи, а в противен случай максималният брой думи е 4.*/

let string = "Today is Friday and its very hot";
let newString = string.toLowerCase().split(" ");

function coerce(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > 6) {
            arr.length = 3;
        } else {
            arr.length = 4;
        }
    }
    console.log(arr.join("-"));
}
coerce(newString);
