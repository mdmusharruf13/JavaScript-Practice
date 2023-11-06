function getFerquency(arr) {
    let obj = {};
    new Set(arr).forEach(ele => obj[ele] = 0);
    arr.forEach(element => {
        obj[element]++
    });
    return obj;
}


let array = [1,2,2,2,3,3,4,5,6,9];

console.log(getFerquency(array));