let arr = [1, 1];

function fibonacci(arr, index = 2) {
    if (arr.length === 10) {
        return;
    }

    arr.push(arr[index - 1] + arr[index - 2]);

    fibonacci(arr, index + 1);
}
fibonacci(arr);

console.log(arr);
