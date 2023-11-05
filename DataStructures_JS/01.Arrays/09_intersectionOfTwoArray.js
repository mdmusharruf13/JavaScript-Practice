function intersection(arr1, arr2) {
    return [].concat(arr1.filter(item => arr2.includes(item)));
}

let array1 = [1,2,3,5,7,9];
let array2 = [3,5,7,9,11,10];

console.log(intersection(array1, array2));