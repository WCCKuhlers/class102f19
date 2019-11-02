function print(input) {
    console.log(input);
}

function day2AM() {
//   console.log(1);
//   print(2);
//   print(3);

//   var count = 1; //   while(count <= 100) {
//       print(count);
//        count++;
//    }

    var sum = 0;
    count = 0;
    while(true) {
        var input = parseInt(prompt("Enter a number.  Type 0 to end. "));
        if(input === 0) {
            break;
        } else {
            sum += input;
            count++ ;
        }
    }

    console.log('The average of your numbers is ' + sum/count);



    
}

day2AM()