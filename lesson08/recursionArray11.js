let arr = [1, 2, 1, -4, 5, 1, 7, 8, 9, 1, 9, 5, 4, 3, 2];
let length = arr.length;

function recursion(a, i = 0) {
    if (a.length === i) {
        return;
    }
    for (let j = i + 1; j < length; j++) {
        if (arr[i] === arr[j]) {
            arr.splice(j, 1);
        }
    }

    return recursion(a, i + 1);
}
recursion(arr);
console.log(arr);
