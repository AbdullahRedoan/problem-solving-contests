function repeatedDigitSum(n) {
    const sum = (s) => s.toString().split("").reduce((acc, num) => acc + Number(num), 0);

    let result = n;
    while (result >= 10) {
        result = sum(result);
    }
    return result;
}
console.log(repeatedDigitSum(123));