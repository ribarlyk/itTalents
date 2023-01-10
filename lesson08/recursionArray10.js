let arr = [1, 2, -3, -4, 5, 6, 7, 8, 9, 0, -123, 123, 13131312];
let min = 0;
let max = 0;

function recursion(a, i = 0) {
    if (arr.length === i) {
        return;
    }

    if (arr[i] < min) {
        min = arr[i];
    }
    if (arr[i] > max) {
        max = arr[i];
    }

    recursion(a, ++i);
}
recursion(arr);
console.log(min, max);
