function print(input) {
    console.log(input);
}

function day2AM() {
//   console.log(1);
//   print(2);
//   print(3);

//   var count = 1; 
//      while(count <= 100) {
//       print(count);
//        count++;
//    }

//    var sum = 0;
//    count = 0;
//    while(true) {
//        var input = parseInt(prompt("Enter a number.  Type 0 to end. "));
//        if(input === 0) {
//            break;
//        } else {
//            sum += input;
//            count++ ;
//        }
//    }

//    console.log('The average of your numbers is ' + sum/count);

    for(var count = 1; count <= 100; count++) {
        print(count);
    }

    var months = ["January", "February", "March", "April", "May",
    "June", "July", "August"];
//    print(months); will print all
//    print(months[0]);
//    print(months[1]);
//    print(months[2]);
//    print(months[3]);
//    print(months[4]);
//  i stands for iteration
    for(var i = 0; i < 8; i++) { // can use months.length instead of 8
        print(months[i]);
    }

    var states = ['Alabama','Alaska','American Samoa','Arizona','Arkansas',
    'California','Colorado','Connecticut','Delaware','District of Columbia',
    'Federated States of Micronesia','Florida','Georgia','Guam','Hawaii',
    'Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana',
    'Maine','Marshall Islands','Maryland','Massachusetts','Michigan',
    'Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada',
    'New Hampshire','New Jersey','New Mexico','New York','North Carolina',
    'North Dakota','Northern Mariana Islands','Ohio','Oklahoma','Oregon',
    'Palau','Pennsylvania','Puerto Rico','Rhode Island','South Carolina',
    'South Dakota','Tennessee','Texas','Utah','Vermont','Virgin Island',
    'Virginia','Washington','West Virginia','Wisconsin','Wyoming'];

    states.forEach(function(state) {
        print(state);
    });

//    states.forEach(function (state){
//        if(state === "Iowa"){
//            print(state  + " is cool");
//        } else {
//            print(state + " sucks!")!
//        }
//        }
//   });



}

// day2AM()
// object oriented

function day2PM() {
    var kyle = { // kyle is called an instance of the object
        firstName: "Kyle", // no semicolon IE array for yourself 
        middleName:  "Lynn", // middle name is Key; Lynn is value
        lastName:  "Kuhlers", // last key property doesn't need last ,
        dob: [4,3,1970], //month, day, year array
        likesPizza: false, // boolean
        heightInInches: 65, // number
        fullName: function () {
            return this.firstName + ' ' + this.middleName + ' ' +
            this.lastName; // this keyword refers to property 
            //associated with the current object
        },
        age: function() {
            var today = new Date();
            var year = today.getFullYear();
            // getMonth will result in 0 for January, 1 for February, etc.
            var month = today.getMonth() +1;
            var day = today.getDate();
            // The birth year is at index position 2 of the dob array
            var myAge = year - this.dob[2];
            if(month < this.dob[0] || month === this.dob[0] && day < this.dob[1]) {
                // Subtract one from the age if you haven't had your birthday this year.
                myAge--;
            }
            return(myAge);
        }, // this comma is optional but add later will need it
    };
    
    print(kyle.firstName);
    print(kyle.likesPizza);
    print(kyle.heightInInches);
    print(kyle.fullName());
    print(kyle.age());
}

day2PM();
