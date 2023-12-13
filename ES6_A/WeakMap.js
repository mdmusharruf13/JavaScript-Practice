let wm = new WeakMap();

wm.set({"name": "nodejs"}, "firstData");

let obj = { "name": "javascript"}
wm.set(obj, "secondData");

console.log(wm);

console.log(wm.has(obj));
console.log(wm.get(obj));

