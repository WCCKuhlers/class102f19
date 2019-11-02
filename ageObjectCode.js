function print(input) {
    console.log(input);
}

function day2PM() {

    var kyle = { 
        firstName: "Kyle", 
        middleName:  "Lynn", 
        lastName:  "Kuhlers", 
        dob: [4,3,1970], 
        likesPizza: false, 
        heightInInches: 65, 
        fullName: function () {
            return this.firstName + ' ' + this.middleName + ' ' +
            this.lastName; 
        },
        age: function() {
            var today = new Date();
            var year = today.getFullYear();
            var month = today.getMonth() +1;
            var day = today.getDate();
            var myAge = year - this.dob[2];
            if(month < this.dob[0] || month === this.dob[0] && day < this.dob[1]) {
                myAge--;
            }
            return(myAge);
        }, 
    };
    var dusty = {
        firstName: "Dusty",
        middleName: "Wyatt",
        lastName: "Juhl",
        dob: [1,3,1977], //month, day, year
        likesPizza: true,
        heightInInches: 69,
        fullName: function() {
            return this.firstName + ' ' + this.middleName + ' ' + this.lastName;
        },
        age: function() {
            var today = new Date();
            var year = today.getFullYear();
            var month = today.getMonth() + 1;
            var day = today.getDate();
            var myAge = year - this.dob[2];
            if (month < this.dob[0] || month === this.dob[0] && day < this.dob[1]) {
                myAge--;
            };
            return (myAge);
        },
    };
    var courtney = {
        firstName: "Courtney",
        middleName: "Beth",
        lastName: "Magner", 
        dob: [11,1,1994], // month, day, year
        likesPizza: true,
        heightInInches: 63,
        fullName: function () {
            return this.firstName + ' ' + this.middleName + ' ' + this.lastName;
        },
        age: function() {
            var today = new Date(); // new Date is built in function that pulls in the date
            var year = today.getFullYear();
            var month = today.getMonth() +1; // getMonth will result in 0 for Jan, 1 for Feb, ect. Adding 1 add the end to match numbers we know
            var day = today.getDate(); 
            var myAge = year - this.dob[2];
            if (month < this.dob[0] || month === this.dob[0] && day < this.dob[1]){
                myAge--;
            }
            return (myAge);
        },
    }; 
    var mike = {
        firstName: "Mike",
        middleName: "Danger",
        lastName: "Rusnak",
        dob: [7,1,1985], //M, D, Y. This is added as an array so we can utlize this later.
        likesPizza: true,
        heightInInches: 73,
        fullName: function () {
            return this.firstName + ' ' + this.middleName + ' ' + this.lastName;
        },
        age: function () {
            var today = new Date();
            var year = today.getFullYear();
            // getMonth will result in 0 for Jan.
            var month = today.getMonth() + 1;
            var day = today.getDate();
            var myAge = year - this.dob[2];
            if(month < this.dob[0] || month === this.dob[0] && day < this.dob[1]) {
                myAge--;
            }
        return(myAge);
        },
    };
    var matt = {
        firstName: "Matt",
        middleName: "Charles",
        lastName: "Barnhart",
        dob: [2, 5, 1987], //month, day, year
        likesPizza: true,
        heightInInches: 70,
        fullName: function() {
            return this.firstName + ' ' + this.middleName + ' ' + this.lastName;
        },
        age: function() {
            var today = new Date();
            var year = today.getFullYear();
            var month = today.getMonth() + 1;
            var day = today.getDate();
            var myAge = year - this.dob[2];
            if(month < this.dob[0] || month === this.dob[0] && day < this.dob[1]) { myAge--;
            }
            return (myAge);
        },
    };

    var friends = [];
    friends.push(mike);
    friends.push(matt);
    friends.push(kyle);
    friends.push(courtney);
    friends.push(dusty);
    friends.forEach(function(person) {
        console.log(person.firstName + ' ' + person.middleName + ' ' + person.lastName);
    });
   
}

day2PM();

