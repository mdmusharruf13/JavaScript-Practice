function missingNumber(arr) {
    let n = arr.length + 1;
    let expectedSum = (n * (n + 1)) / 2;
    let actualSum = arr.reduce((sum, curr) => sum + curr, 0);
    return expectedSum - actualSum;
}

let nums = [1,2,3,5];

console.error(missingNumber(nums));