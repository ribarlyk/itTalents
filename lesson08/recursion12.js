function triangle(n, row = 0, level = "", column = 0) {
    if (n === row) {
        return;
    }
    if (level.length === n * 2 - 1) {
        console.log(level);
        return triangle(n, row + 1);
    }
    if (column > n * 2 - 1) {

        return triangle(n, row,column + 1);
    }

    let middlePoint = Math.floor((n * 2 - 1) / 2);
    let add;
    if (column === n + row - 1 || column === n - row + 1 || column === n) {
        add = "^";
    } else {
        add = " ";
    }
    triangle(n, row, level + add);
}
triangle(3);
