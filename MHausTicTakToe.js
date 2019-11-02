var currentPlayer = "X"
var boxArray =["", "", "", "", "", "", "", "", ""];
var gamePlaying = true;
function setup() {
  createCanvas(300,300);
  noLoop();
}

function draw() {
  background(156, 149, 143);
  strokeWeight(5);
  line(100, 0, 100, 300);
  line(200, 0, 200, 300);
  line(300, 200, 0, 200);
  line(300, 100, 0, 100);
 
  for(var i = 0; i < boxArray.length; i++) {
    var x = 50 + ( i % 3 ) * 100
    var y = 50 + Math.floor( i / 3 ) * 100
    if(boxArray[i] == "X") {
      drawX(x, y);
    } else if (boxArray[i] == "O") {
      drawO(x, y);
    }
  }
}

function drawX(x, y) {
  line(x-25, y-25, x+25, y+25);
  line(x+25, y-25, x-25, y+25);
}

function drawO(x, y) {
  noFill();
  var w = 50;
  circle(x, y, w);
}

function mouseClicked() {
  if(gamePlaying) {
     var box = getBox();
     if(boxArray[box] == "") {
       boxArray[box] = currentPlayer;
       redraw();
       if (!winner()) {  
        switchPlayer();
       }
     }
  }
}

function winner() {
  if (boxArray[0]==boxArray[1]&&boxArray[1]==boxArray[2]&&boxArray[2]!==""){
      gamePlaying=false;
    stroke("rgb(255,0,0)");
    line(0,50,300,50);
    return true;
  } else if (boxArray[2]==boxArray[4]&&boxArray[4]==boxArray[6]&&boxArray[6]!==""){
      gamePlaying=false;
    stroke("rgb(255,0,0)");
    line(0,300,300,0);
    return true;
  } else if (boxArray[0]==boxArray[4]&&boxArray[4]==boxArray[8]&&boxArray[8]!==""){
      gamePlaying=false;
    stroke("rgb(255,0,0)");
    line(0,0,300,300);
    return true;
  } if (boxArray[0]==boxArray[3]&&boxArray[3]==boxArray[6]&&boxArray[6]!==""){
      gamePlaying=false;
    stroke("rgb(255,0,0)");
    line(50,0,50,300);
    return true;
  } else if (boxArray[1]==boxArray[4]&&boxArray[4]==boxArray[7]&&boxArray[7]!==""){
      gamePlaying=false;
    stroke("rgb(255,0,0)");
    line(150,0,150,300);
    return true;
  } else if (boxArray[2]==boxArray[5]&&boxArray[5]==boxArray[8]&&boxArray[8]!==""){
      gamePlaying=false;
    stroke("rgb(255,0,0)");
    line(250,0,250,300);
    return true;
  } else if (boxArray[3]==boxArray[4]&&boxArray[4]==boxArray[5]&&boxArray[5]!==""){
      gamePlaying=false;
    stroke("rgb(255,0,0)");
    line(0,150,300,150);
    return true;
  } else if (boxArray[6]==boxArray[7]&&boxArray[7]==boxArray[8]&&boxArray[8]!==""){
      gamePlaying=false;
    stroke("rgb(255,0,0)");
    line(0,250,300,250);
    return true;
  }
  return false;
}

function switchPlayer() {
  if(currentPlayer == "X") {
    currentPlayer = "O";
  } else {
    currentPlayer = "X";
  }
}

function getBox() {
 if(mouseX <= 100 && mouseY <= 100) {
  return 0;
 } else if(mouseX <= 200 && mouseY <= 100) {
  return 1;
 }  else if(mouseX <= 300 && mouseY <= 100) {
  return 2;
 }  else if(mouseX <= 100 && mouseY <= 200) {
  return 3;
 } else if(mouseX <= 200 && mouseY <= 200) {
  return 4;
 } else if(mouseX <= 300 && mouseY <= 200) {
  return 5;
 } else if(mouseX <= 100 && mouseY <= 300) {
  return 6;
 } else if(mouseX <= 200 && mouseY <= 300) {
  return 7;
 } else if(mouseX <= 300 && mouseY <= 300) {
  return 8;
 }
}