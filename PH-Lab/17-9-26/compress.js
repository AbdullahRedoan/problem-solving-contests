function compressCharacters(str) {
    if (!str) return "";
    let result = "";
    let count = 1;
    for (let i = 0; i < str.length; i++) {
        if (i < str.length - 1 && str[i] === str[i + 1]) {
            count++;
        } else {
            result += str[i] + (count > 1 ? count : "");
            count = 1; 
        }
    }
    return result;
}

console.log(compressCharacters("hello"));