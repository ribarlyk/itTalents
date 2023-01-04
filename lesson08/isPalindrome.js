function reverseString(str) {
    if (str.length === 1) {
        return str;
    }
    return reverseString(str.slice(1)) + str[0];
}
function isPalindrome(str) {
    return str === reverseString(str);
}
console.log(isPalindrome("1221"));
let str = "1221";

console.log(str.slice(1) + str[0]);
str = str.slice(1) + str[0];
console.log(str.slice(1) + str[0]);
str = str.slice(1) + str[0];
console.log(str.slice(1) + str[0]);
str = str.slice(1) + str[0];
console.log(str.slice(1) + str[0]);

console.log(str);
