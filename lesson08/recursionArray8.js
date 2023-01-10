let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 123, 123, 13131312];

let sum = 0;
function recursion(a, i = 0) {
    if (a.length == i) {
        return;
    }
    sum += a[i];
    return recursion(a, ++i);
}
recursion(arr);
console.log(sum);
