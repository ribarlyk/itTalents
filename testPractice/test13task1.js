let consequtive = 0;
let counter = 0;

while (true) {
    let isPair = false;
    let input = "";
    counter++;

    for (let z = 0; z < 5; z++) {
        let char = "AKQJTS123456789".charAt(Math.floor(Math.random() * 14));
        input += char;
    }

    let arr = input.split("");
    console.log(arr)
    for (let card = 0; card < arr.length; card++) {
        if (arr[card] == "S" || arr[card] == "1") {
            console.log("Invalid card dealt");
            isPair = false;
            break;
        } else {
            for (let i = 0; i < arr.length - 1; i++) {
                for (let j = i + 1; j < arr.length; j++) {
                    if (arr[i] === arr[j]) {
                        isPair = true;
                    }
                }
                break;
            }
        }
    }

    if (isPair) {
        consequtive++;
    } else {
        consequtive = 0;
    }
    if (consequtive === 4) {
        break;
    }
}
console.log(consequtive);
console.log(counter);
