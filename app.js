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
    console.log(middleName);
    console.log(typeof(fullName)); 
    var likesPizza = true; //boolean NO Quotes if "" will become a string.  In python capitalize T or F
    var hasTattoos = false;
    console.log(typeof(likesPizza)); //
}

// to call the function YES SEMICOLON!!
day1AM();