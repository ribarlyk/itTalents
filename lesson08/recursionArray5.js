let string = "PAVEL";

function stringToLower(str, i = 0, newString = "") {
    if (i === str.length) {
        return;
    }

    newString += str[i].toLowerCase();

    console.log(newString);
    return stringToLower(str, i + 1, newString);
}

stringToLower(string);
