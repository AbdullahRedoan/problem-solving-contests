function longestIncreasingStreak(nums) {
    let longestStreak = 1;
    let currentStreak = 1;
    if (nums?.length === 0) return 0;

    for (let i = 1; i < nums?.length; i++) {
        if (nums[i] > nums[i - 1]) {
            currentStreak++;
        } else {
            currentStreak = 1;
        }
        if (currentStreak > longestStreak) {
            longestStreak = currentStreak;
        }
    }
    return longestStreak;
}
console.log(longestIncreasingStreak([1, 2, 3, 1, 2]));