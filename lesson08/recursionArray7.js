let arr = [
    [2, 2, 3],
    [1, 2, 3],
    [5, 2, 3],
    [2, 3, 3],
    [2, 4, 3],
    [4, 7, 9],
];

let sum = 0;

function recursion(arr, i = 0, j = 0) {
    if (i === arr.length) {
        return;
    }
    for (let j = 0; j < arr[i].length; j++) {
        sum += arr[i][j];
    }

    recursion(arr, ++i);
}

recursion(arr);
console.log(sum);
