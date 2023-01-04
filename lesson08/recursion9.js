function recursion(a, b, string = "") {
    let sum = [];

    if (a < b) {
        return;
    }

    if (a % 3 === 0) {
        sum.push(`skip ${a}`);
        string += `skip ${a}`;
        recursion(a - 1, b);
    } else {
        sum.push(a * a);
        string += a * a;

        recursion(a - 1, b);
    }

    console.log(sum.join(""));
    console.log(string);
}
recursion(10, 1);
