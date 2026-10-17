function isAnagram(s1, s2) {
    const sorted1 = s1.toLowerCase().replace(/[^a-zA-Z]/g, '').split("").sort().join("")
    const sorted2 = s2.toLowerCase().replace(/[^a-zA-Z]/g, '').split("").sort().join("")
    return sorted1 === sorted2;
}

console.log(isAnagram("listenpo", "Silent"));