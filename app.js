function setup() {
    createCanvas(640, 480);
}

function draw() {
    noStroke();
    fill(0,255,0);
    rect(320, 240, 20, 20);
    
    fill(255,0,0);
    circle(500, 100, 20);

    stroke(0, 0, 0);
    strokeWeight(3);
    line(0, 50, 640, 50);
    //noStroke();
    //fill(255,0,0);
    //ellipse(100, 100, 150, 150); // draws a circle at x,y (100,100) with size w,h (150,150)
  
    //fill(0,255,0);
    //rect(300, 300, 150, 150); //draws a rectangle at x,y (300,300) with size w,h (150,150)
  
    //stroke(0,0,255);
    //line(100, 225, 400, 225); //draws line starting at x,y (100,225) ending at x,y (400, 225)
  
}
// or create function this way too:  var day1AM = function() {

//}
// define function below NO SEMICOLON!!
function day1AM() {
    console.log("Hello Word");
    var fullName = "Kyle Kuhlers";
    var age = 49;
    var weight = 138.7; // numbers in other programs would be called integer (python, etc)
    var heightInches = 65;
    var address = "306 Grace Ave.";
    var middleName;
    //console.log(middleName);
    //console.log(typeof(fullName)); 
    var likesPizza = true; //boolean NO Quotes if "" will become a string.  In python capitalize T or F
    var hasTattoos = false;
    //console.log(typeof(likesPizza)); //

    console.log(age);
    age = 50; //changing variable value global variable
    console.log(age);
    age = age + 1;
    console.log(age);
    age++;
    age += 1;
    console.log(age);
    age *= 5;
    age /= 10;
    console.log(age);

    console.log(fullName + " is " + age + " years old.");
    console.log("Do you like pizza? " + likesPizza);
    //console.log("Kyle Kuhlers is 5 foot 5 inches tall");  CHALLENGE use variables above
    var feet = Math.floor(heightInches / 12); //to round down use floor function "math library" Math.Ceil rounds up
    var inches = heightInches % 12; //modulus (%)will give you remainder
    console.log(feet);
    
    console.log(fullName+" is " + feet + " foot " + inches + " inches");
    
}
 function day1PM() {
    //using function below python print instead of console.log
    print("Hello World");
    var convertedTemp = f2c(32); //Calling the function with 212 becomes tempF
    print(convertedTemp);
    print(canIGoToTheCasino(age, "IA"));//age is undefined in a different function age is local
    var age = 19;
    print(canIGoToTheCasino(age, "IA"));
    print(canIGoToTheCasino(age, "MN"));

    print(whatShouldIWear(90)); //90 being sent to temp is it greater than 75?
    print(whatShouldIWear(60));
    print(whatShouldIWear(-8));
 }

// to call the function YES SEMICOLON!! 
day1AM();
day1PM();

//replace console.log with word print
function print(input) {
    console.log(input);
}

//Converts Fahrenheit to Celcius
//Input: Temperature in fahrenheit
function f2c(tempF) {
    return((tempF - 32) * (5 / 9));//return sends it back to the call above most will return instead of print
}

function bmiConverter(weight, height) { //inputs are weight & height called PARAMETERS
    return 0;
}

function canIGoToTheCasino(age, location) {
    return age >= 21 && location == "IA" || age >= 18 && location == "MN" ; //|| is "pipe" for the OR
}

function canISleepIn(day, personalDay, holiday) { // personalDay boolean, day Sat or Sun, holidays
    // Assume a normal M-F 8-5 job
    // return true if the day is Saturday or Sunday
    // or vacation or holiday
}

function whatShouldIWear(temp) {
    if(temp >= 75) {
        return "swim wear";
    }
    else if (temp >= 45) { //no else() unless else if ()
        return "light jacket";
    }
    else if(temp >= 10) {
        return "winter jacket";
    }
    else {
        return 'Don\'t go outside';
    }
}

