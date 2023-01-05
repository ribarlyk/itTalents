function recursion(a, b, string = "") {
    if (a < b) {
        return;
    }

    if (a % 3 === 0) {
        string += `skip ${a}`;
        recursion(a - 1, b);
    } else {
        string += a * a;

        recursion(a - 1, b);
    }

    console.log(string);
}
recursion(10, 1);
