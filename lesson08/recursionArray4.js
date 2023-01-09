let firstArray = [13, 2, 7, 2];
let secondArray = [13, 2, 7, 2];
let areEqual = true;

if (firstArray.length === secondArray.length) {
    function recursion(arr1, arr2, index = 0) {
        if (index === arr1.length) {
            return;
        }

        if (arr1[index] != arr2[index]) {
            areEqual = false;
        }

        recursion(arr1, arr2, index + 1);
    }

    console.log(`Масивите имат еднакъв размер.`);
} else {
    console.log(`Масивите нямат еднакъв размер.`);
}
recursion(firstArray, secondArray);
areEqual
    ? console.log(`Масивите са еднакви`)
    : console.log("Масивите са различни.");
