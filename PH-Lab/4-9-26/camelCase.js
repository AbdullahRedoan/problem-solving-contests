// function convertToCamelCase(sentence) {
//     const split = sentence.trim().split(" ")
//     const string = split.slice(1, split.length).map(word => {
//         const letter = word[0].toUpperCase() + word.slice(1, word.length)
//         console.log(letter)
//         return letter
//     })
//     const array = split[0]+string.join("")
//     return array;
// }




function convertToCamelCase(sentence) {
    const wordsArray = sentence.trim().split(" ")
    if(wordsArray.length <= 1){
        return;
    }else{
        const upperCaseWordsArray = wordsArray.map(word => {
        if(word.length === 0 || word[0] === ""){
            return;
        }else{  
        const upperCaseWords = word[0].toUpperCase() + word.slice(1);
        return upperCaseWords;
        }
    })
    const upperCaseSentence = upperCaseWordsArray.join("");
    const camelCaseSentence = upperCaseSentence[0].toLowerCase()+upperCaseSentence.slice(1);
    return camelCaseSentence;
    }
}
console.log(convertToCamelCase(" java script is fun  "));