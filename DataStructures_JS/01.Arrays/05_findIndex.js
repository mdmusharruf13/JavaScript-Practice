function getIndex(arr,ele) {
    let total =  arr.findIndex((val,index)=> {
        return val === ele;
    });
    
    return total;
}

let array = [1,2,3,4,5];

console.log(getIndex(array,4));

console.log(getIndex(array,7));