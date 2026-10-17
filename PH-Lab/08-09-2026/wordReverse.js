// function reverseEachWord(str) {
//     if (str.length === 0) {
//         return
//     } else {
//         const wordsArray = str.split(" ")
//         const reversed = wordsArray.map(word => {
//             const reversedWord = word.split("").reverse().join("");
//             return reversedWord;
//         })
//         const reversedSentence = reversed.join(" ")
//         return reversedSentence;
//     }
// }




function reverseEachWord(str) {
    return str.split(" ").map(word => word.split("").reverse().join("")).join(" ")
    }

console.log(reverseEachWord("JavaScript is fun"));