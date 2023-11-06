function moveZero(arr) {
    let nums = [];
    arr.forEach(element => {
        if(element !== 0) nums.push(element);
    });
    for(let i = nums.length - 1; i < arr.length; i++) {
        nums.push(0);
    }
    return nums;
}

let array = [1,2,3,4,0,0,5];

console.log(moveZero(array))