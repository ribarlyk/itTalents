function reverseString(str) {
    if (str.length === 1) {
        return str;
    }
    return reverseString(str.slice(1)) + str[0];
}
function isPalindrome(str) {
    return (str === reverseString(str)
        ? `Yes they are Palindrome`
        : "No");
}
console.log(isPalindrome("12221"));
