// Map
// Map can contain integer as key as values as well as array, object, string

let map = new Map([["a1","javascript"], ["a2", "nodejs"]]);
console.log(map);

map.set("m1", "react");
console.log(map);

map.delete("a1");
console.log(map);

console.log(map.get("a2"));

const keys = map.keys();
console.log(keys);

const values = map.values();
console.log(values);

console.log(map.has("m1"));

console.log(map.entries());

for(let [key,val] of map.entries()) {
    console.log(key,val);
}

map.set(1, "angular");
console.log(map);

let objKey = {name: "musharuf"};
map.set(objKey, "details")
console.log(map);

let arr = [11,3,5];
map.set(arr, { name: "array"});
console.log(map);
