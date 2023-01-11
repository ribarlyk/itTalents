// 3: (25%) Write a method that by given array of integers checks if the average value of the array
// is positive or negative. The method should return either “Positive”, “Non-positive” as a result
// (zero is non-positive). Use recursion!

let arr = [1, 2, 3, 4, 52, 6 - 22];
let sum = 0;
let length = arr.length;
function recursion(arr, i = 0) {
    if (arr.length === i) {
        return;
    }
    sum += arr[i];
    recursion(arr, i + 1);
}

recursion(arr);

console.log(sum);
if (sum / length > 0) {
    console.log("positive");
} else {
    console.log("negative");
}
