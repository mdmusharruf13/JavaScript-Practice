function getIndex(arr) {
    
    return [...new Set(arr)];
}

let array = [1,2,3,3,4,5,5,5];

console.log(getIndex(array));
