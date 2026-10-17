function findLongestWord(sentence) {
  if (sentence.length === 0) {
    return
  } else {
    const wordsArray = sentence.trim().split(/[^\w]+/).filter(Boolean);
    if (wordsArray.length === 0) {
      return
    } else {

      let longestWordCharacters = 0;
      let longestWords = [];
      for (const word of wordsArray) {
        if (word.length > longestWordCharacters) {
          longestWordCharacters = word.length;
          longestWords = [word];
        } else if (word.length === longestWordCharacters) {
          longestWordCharacters = word.length;
          longestWords.push(word)
        }
      }
      return longestWords[0];
    }
  }
}

console.log(findLongestWord("there ***   no way"));
