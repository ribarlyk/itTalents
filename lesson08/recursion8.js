let n = 3;
function printNumbers(b) {
    let sum = "";

    if (b > n * 2 + 1 || b < 1) {
        return;
    }
    for (let i = 0; i < n; i++) {
        sum += b + "";
    }
    console.log(sum);
    printNumbers(b + 2);
}
printNumbers(n - 1);
