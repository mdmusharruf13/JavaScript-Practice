function sumOfElemnts(arr) {
    return arr.reduce((sum, current)=> {
        return sum + current;
    },0);
}

let array = [1,2,3,4,5];

console.log(sumOfElemnts(array));