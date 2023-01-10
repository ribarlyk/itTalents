let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 123, 123, 13131312];
let element = 123;
let isPresent = false;

function recursion(a, i = 0) {
    if (a.length == i) {
        return;
    }
    if (arr[i] === element) {
        return (isPresent = true);
    } else {
        return recursion(a, i + 1);
    }
}

recursion(arr);
console.log(isPresent);
