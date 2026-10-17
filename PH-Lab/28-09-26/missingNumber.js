function missingNumber(nums) {
  const n = nums.length;
  const expectedSum = n*(n+1) / 2;
  const actualSum = nums.reduce((acc, num) => acc += num);
  console.log(actualSum);
  const missingNum = expectedSum - actualSum;
    return missingNum;
}


console.log(missingNumber([0,1,2,3,5,6,7]));