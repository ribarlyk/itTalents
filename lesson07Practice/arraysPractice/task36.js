let n = [7, 8, 7, 8, 7 , 6];
let n2 = [1, 2, 3, 3, 5];
let shortestN = n.length > n2.length ? n2 : n;
console.log(n, n2);

for (let i = 0; i < shortestN.length; i++) {
    let c = "";
    if (n[i] % 2 === 0 && n2[i] % 2 === 1) {
        c = n2[i];
        n2[i] = n[i];
        n[i] = c;
    }
}

console.log(n, n2);
