// rest operator
function addNumbers(a,b,c,...other) {
    console.log(other);
    return a+b+c;
}

const result = addNumbers(1,5,9,2,6,7);
console.log(result);``


// spread operator
function getNames(name1, name2, name3) {
    console.log(name1, name2, name3);
}

var names = ['java','python','c'];

getNames(names[0], names[1], names[2]);
getNames(...names);


const obj = {
    name: 'musharruf',
    age: 29,
    hobbies: ['cricket','riding']
};

// rest with objects
const { name, ...rest } = obj;
console.log(name);
console.log(rest);

// spread with objects
var newStudent = {
    ...obj,
    age: 28
};

console.log(newStudent);

