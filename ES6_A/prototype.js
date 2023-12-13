const obj = {
    name: "Musharruf",
    getName: function() {
        return this.name;
    },
    getRoll: function() {
        return this.roll;
    },
    getDept: function() {
        return this.dept;
    }
};

const obj2 = {
    roll: 98,
    __proto__: obj,
};

const obj3 = {
    name: "nawaz",
    dept: "CS",
    __proto__: obj2,
}

console.log(obj.getName());
console.log(obj2.getRoll());

console.log(obj3.getName());
console.log(obj3.getDept());