let array = [5, 2, 5, 8, 3];

function recursion(arr, index = arr.length - 1) {
    if (index === 0) {
        return array.push(arr[index]);
    }

    array.push(arr[index]);
    return recursion(arr, index - 1);
}
recursion(array);
console.log(array);
