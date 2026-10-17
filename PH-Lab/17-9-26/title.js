function titleCaseSentence(str) {
    if(!str || str.trim().length === 0) return;
    const cleanArr = str.toLowerCase().split(" ").filter(Boolean);
    const words = cleanArr.map(word => {
        const upperCaseWord = word[0].toUpperCase() + word.slice(1, word.length);
        return upperCaseWord;
    })
    const result = words.join(" ")
    return result;
}

console.log(titleCaseSentence(""));