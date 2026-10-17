function findFirstUniqueChar(s) {
    const charactersArray = s.split("")
    const frequency = charactersArray.reduce((acc, curr) => {
        acc[curr] = (acc[curr] || 0) + 1;
        return acc;
    }, {});
    const uniqueChar = Object.keys(frequency).find(key =>
        frequency[key] === 1
    )
    const result = uniqueChar ? uniqueChar : -1;
    return result;
}

console.log(findFirstUniqueChar(""));