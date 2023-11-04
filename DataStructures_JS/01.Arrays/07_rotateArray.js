function rotateArray(arr,rotation) {
    let rotateArr = arr.slice(rotation);
    let remainingArr = arr.slice(0,rotation);
    return [...rotateArr, ...remainingArr];
}

let arr = [1,2,3,4,5,6];

console.log(arr);
console.log(rotateArray(arr,2));
console.log(rotateArray(arr,1));