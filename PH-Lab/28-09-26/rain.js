function findRainfallPeaks(rainfall) {
    let peak = [];
    for (let i = 0; i < rainfall.length; i++) {
        if (rainfall[i] > rainfall[i - 1] && rainfall[i] > rainfall[i + 1]) {
            peak = [...peak, i+1]
        }
    }
    return peak;
}


console.log(findRainfallPeaks([2, 5, 3, 3, 7, 4, 4, 6]));