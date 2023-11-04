function getAverage(arr) {
    let total =  arr.reduce((sum, current)=> {
        return sum + current;
    },0);
    
    return total / arr.length;
}

let array = [1,2,3,4,5];

console.log(getAverage(array));