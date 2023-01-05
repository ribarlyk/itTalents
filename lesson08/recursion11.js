function pyramid(n, row = 0, level = "") {
    if (n === row) {
        return;
    }

    if (level.length === n * 2 - 1) {
        console.log(level);
        return pyramid(n, row + 1);
    }

    const mid = Math.floor((n * 2 - 1) / 2);
    let add;
    if (mid + row >= level.length && mid - row <= level.length) {
        add = "*";
    } else {
        add = " ";
    }

    pyramid(n, row, level + add);
}

pyramid(3);
