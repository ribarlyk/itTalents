// The input will be a single string.

// Find all special words starting with #. If the found special word does not consist only of letters, then it is invalid and should not be printed.

// Finally, print out all the special words you found without the label (#) on a new line.



let strArray = [ "q", "w", "w", "w", "e", "i", "u", "r"];
let findDuplicates = arr => arr.filter((item, index) => arr.indexOf(item) != index)

console.log(findDuplicates(strArray))
console.log(strArray)
 // All duplicat
