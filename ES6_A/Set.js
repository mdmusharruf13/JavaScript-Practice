"use strict";

// set
// it contains only unique values
// object constructor

let myArray = [1,2,3,3,4,5,5];

let set = new Set(myArray);
console.log(set);

for(let each of set) {
    console.log(each);
}

console.log(set.has(2));
console.log(set.has(12));

set.add(7);
set.add(7);
console.log(set);

set.delete(5);
console.log(set);

let obj = { name: "javascript" };
set.add(obj);
console.log(set);

let arr = [1,2,3,4,5];
set.add(arr);
console.log(set);

set.clear();
console.log(set);

