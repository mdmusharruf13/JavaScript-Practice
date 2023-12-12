let userDetails = {
    name: 'musharruf',
    age: 29,
    designation: 'student',
    printDetails: function() {
        console.log(this.name);
    }
}

let userDetails2 = {
    name: 'nawaz',
    age: 30,
    designation: 'under grad'
}

// call

userDetails.printDetails();
userDetails.printDetails.call(userDetails2);

let printInfo = function(state, country) {
    console.log(this.name+" "+state+" "+country);
}

printInfo.call(userDetails, "telangana", "india");
printInfo.call(userDetails2, "kolkata", "india");


// apply

let printInfo2 = function(state, country) {
    console.log(this.name+" "+state+" "+country);
}

printInfo2.apply(userDetails,["kolkata", "west bengal"]);

// bind

let bindFun = printInfo.bind(userDetails2,"telangana", "india")
bindFun();