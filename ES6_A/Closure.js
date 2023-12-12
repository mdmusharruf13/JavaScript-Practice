// // example1
// let sum = function(a) {
//     c = 5;
//     return function(b) {
//         return a+b+c;
//     }
// }

// let result = sum(3);

// console.log(result(4))


// // example2
var product = function(a,b,c) {
    return {
        getProductTwo: function() {
            return a*b;
        },
        getProductThree: function() {
            return a*b*c;
        }
    }
}

let mul = product(2,3,4);
console.log(mul.getProductTwo());
console.log(mul.getProductThree());

let mul2 = product(1,3,4);
console.log(mul2.getProductTwo());
console.log(mul2.getProductThree());