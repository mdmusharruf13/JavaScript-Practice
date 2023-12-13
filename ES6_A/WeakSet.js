// WeakSet
// only store objects
// it cannot be iterated

let ws = new WeakSet();
let obj = {name: "main"};
let obj2 = {array: [1,2,3,4]};

ws.add(obj);
ws.add(obj2);
console.log(ws);

console.log(ws.has(obj));
ws.delete(obj);
console.log(ws.has(obj));

