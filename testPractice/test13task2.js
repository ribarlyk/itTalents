// 2: (25%) Write a function that takes a String variable that holds some text. The method must
// output the sentence with the longest word, the longest sentence and the number of sentences.
// It`s given that each sentence ends with a dot and each word is separated with a space.
// Example:
// Today is a good day for test. The sun is shining. The students are happy. The birds are blue.

let string =
    "Today is a good day for test. The sun is shining. The students are happy. The birds are blue.";

function stringManipulate(str) {
    let sentence = "";
    let longestSentence = "";
    let longestWord = "";
    let longestWordSentence = "";
    let array = str.split(".");
    let sentenceNumber = array.length - 1;

    for (let i = 0; i < array.length - 1; i++) {
        sentence = array[i].trim();

        if (sentence.length > longestSentence.length) {
            longestSentence = sentence + ".";
        }

        let words = sentence.split(" ");

        for (let j = 0; j < words.length; j++) {
            for (let z = 0; z < words[j].length; z++) {
                let word = words[j].trim();

                if (word.length > longestWord.length) {
                    longestWord = words[j];
                    longestWordSentence = words.join(" ") + ".";
                }
            }
        }
    }

    console.log(`Sentence with Longest word: ${longestWordSentence}`);
    console.log(`Longest sentence: ${longestSentence}`);
    console.log(`Sentences in input: ${sentenceNumber}`);
}

stringManipulate(string);
