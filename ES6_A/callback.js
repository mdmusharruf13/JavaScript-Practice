const array = [
    { name: "musharruf", age: 29 },
    { name: "nawaz", age: 25 },
];

// function printDetails() {
//     setTimeout(() => {
//         let list = "";
//         array.forEach((item) => {
//             list += `<li>${item.name}</li>`;
//         });
//         document.body.innerHTML = list;
//     },1000);
// }

// function createData(newData) {
//     setTimeout(() => {
//         array.push(newData);
//     },2000);
// }

// createData({name: "musharruf nawaz", age: 35});
// printDetails();


// callback

function printDetails() {
    setTimeout(() => {
        let list = "";
        array.forEach((item) => {
            list += `<li>${item.name}</li>`;
        });
        document.body.innerHTML = list;
    },1000);
}

function createData(newData, callback) {
    setTimeout(() => {
        array.push(newData);
        callback();
    },2000);
}

createData({name: "musharruf nawaz", age: 35},printDetails);