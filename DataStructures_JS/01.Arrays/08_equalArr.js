function checkEqual(arr1, arr2) {
    return JSON.stringify(arr1) === JSON.stringify(arr2);
}

let a1 = [1,2,3,4,5];
let a2 = [1,2,4,5];
let a3 = [1,2,3,4,5];

console.log(checkEqual(a1,a2));
console.log(checkEqual(a1,a3));