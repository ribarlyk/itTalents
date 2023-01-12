// 2: (25%) Write a function that takes a String variable that holds some text. The method must
// output the sentence with the longest word, the longest sentence and the number of sentences.
// It`s given that each sentence ends with a dot and each word is separated with a space.
// Example:
// Today is a good day for test. The sun is shining. The students are happy. The birds are blue.

let string =
    "Today is a good day for test. The sun is shining. The students are happy. The birds are blue.";

function stringManipulate(
    str,
    sentence = "",
    longestSentence = "",
    longestWord = "",
    longestWordSentence = ""
) {
    let array = str.split(".");
    let sentenceNumber = array.length - 1;

    for (let i = 0; i < array.length - 1; i++) {
        sentence = array[i].trim();
        if (sentence.length > longestSentence.length) {
            longestSentence = sentence;
        }

        let words = sentence.split(" ");
        let longest = words.reduce((a, b) => (a.length < b.length ? b : a), "");

        if (longest.length > longestWord.length) {
            longestWord = longest;
            longestWordSentence = words.includes(longestWord)
                ? words.join(" ")
                : "";
        }
    }

console.log(
`Sentence with Longest word: ${longestWordSentence}
Longest sentence: ${longestSentence}
Sentences in input: ${sentenceNumber}`
);
}

stringManipulate(string);
