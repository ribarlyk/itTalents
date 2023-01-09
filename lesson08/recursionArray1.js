let arr = [10, 3, 5, 8, 6, -3, 7];
let tempLowest = 0;
function recursion(arr, i = 0) {
    if (i === arr.length) {
        return;
    }
    let currentLowest = 0;
    if (arr[i] % 3 === 0) {
        currentLowest = arr[i];
        if (currentLowest < tempLowest) {
            tempLowest = arr[i];
        }
    }
    return recursion(arr, i + 1);
}

recursion(arr);
console.log(tempLowest);
