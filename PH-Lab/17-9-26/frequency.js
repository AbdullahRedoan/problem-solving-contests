function countWordFrequencies(sentence) {
  let wordCount = {};
  const wordsArray = sentence.toLowerCase().split(/[^a-z0-9]+/).filter(Boolean)
  for(let word of wordsArray){
    wordCount[word] = (wordCount[word] || 0) +1;
}
    return wordCount;
}

console.log(countWordFrequencies("The quick brown fox jumps over the lazy dog."));