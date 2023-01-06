let consequtive = 0;
let counter = 0;

function throwDice() {
    return Math.ceil(Math.random() * 6);
}

while (true) {
    counter++;
    let try1 = throwDice();
    let try2 = throwDice();
    let try3 = throwDice();

    if (try1 + try2 + try3 === 18) {
        consequtive++;
    } else {
        consequtive = 0;
    }

    if (consequtive === 3) {
        break;
    }
}

console.log(`Gosho hvurli ${consequtive} shestici za ${counter} opita`);
