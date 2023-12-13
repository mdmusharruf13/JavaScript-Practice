const array = [
    { name: "musharruf", age: 29 },
    { name: "nawaz", age: 25 },
];

function printDetails() {
    setTimeout(() => {
        let list = "";
        array.forEach((item) => {
            list += `<li>${item.name}</li>`;
        });
        document.body.innerHTML = list;
    },1000);
}

function createData(newData) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            array.push(newData);
            let error = true;
            if(error) {
                resolve();
            }
            else {
                reject("something went wrong!!");
            }
    
        },2000);
    })
}

async function start() {
    await createData({name: "musharruf nawaz", age: 35});
    printDetails();
}

start();
