const companies = [
    {name: "Google", category: "Product Based"},
    {name: "Amazon", category: "Product Based"},
    {name: "Paytm", category: "Product Based"},
    {name: "EPAM", category: "Service Based"},
    {name: "TCS", category: "Service Based"},
];

// for(let i = 0; i < companies.length; i++) {
//     console.log(companies[i].name);
// }

function printData(item) {
    console.log(item.name+" -> "+item.category);
}

companies.forEach(printData);

companies.forEach(function(each,index,arr) {
    console.log(each.name);
});

companies.forEach((item) => {
    console.log(item.category);
})