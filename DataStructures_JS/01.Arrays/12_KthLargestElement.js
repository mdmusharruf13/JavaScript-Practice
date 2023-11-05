function kthLargest(arr, k) {
    let nums = Array.from(new Set(arr));
    nums.sort((a,b) => a - b);
    return nums[nums.length - k];
}

let nums = [5,2,1,3,5,3,1,1];

console.log(kthLargest(nums,2));