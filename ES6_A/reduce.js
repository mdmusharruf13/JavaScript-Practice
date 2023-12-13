const nums = [2,4,6,1,9,10];

const sum = nums.reduce(function(acc, curr) {
    return acc + curr;
},0);

console.log(sum);