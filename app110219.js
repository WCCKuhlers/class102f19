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

}

day2AM()