function unionArray(arr1, arr2) {
    return [...new Set([...arr1, ...arr2])];
}

let array1 = [1,2,3,4,5,6];
let array2 = [2,4,6,8,10];

console.log(unionArray(array1, array2));