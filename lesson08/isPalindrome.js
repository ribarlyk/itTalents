function reverseString(str) {
    if (str.length === 1) {
        return str;
    }
    return reverseString(str.slice(1)) + str[0];
}
function isPalindrome(str) {
    return str === reverseString(str);
}
console.log(isPalindrome("12221"));
