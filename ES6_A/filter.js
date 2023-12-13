const ages = [33,10,51,52,89,23,45,65,80,75,41,22,35];


for(let i = 0; i < ages.length; i++) {
    if(ages[i] > 50) {
        console.log(ages[i]);
    }
}

let newAges = ages.filter((age) => {
    return age > 50;
});

console.log(newAges);

console.log(ages.filter((age) => age > 50));