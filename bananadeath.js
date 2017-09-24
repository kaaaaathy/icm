//banana position variables
let y;
let x;

let speed = 0;

//banana color variables
let r1 = 206;
let g1 = 239;
let b1 = 107;

//whether or not you are able to eat bananas
let eat = false;

//environment
let textHeader = "Eat the bananas before they expire!!";
let bg = 0;


//SET "BASE" BANANA POSITION VALUES
function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
  x = width / 2;
  y = 10;
}


//PLAY THE GAME!
function draw() {
  background(bg);
  frameRate(60);

  //make 4 delicious, GMO-free, fair trade bananas
  banana(x, 0);
  banana(x + 160, 20);
  banana(x - 50, 80);
  banana(x - 80, -80);

  //make the banana fall at a random-ish speed
  speed = random(2);
  y += speed;

  //generate instruction text
  textSize(28);
  textAlign(CENTER);
  strokeWeight(2);
  stroke(206, 239, 107);
  fill(0);
  text(textHeader, width / 2, 60);

  //create controllable text cursor
  fill(255);
  stroke(0);
  text("nom", mouseX, mouseY);

  //check if I can eat the bananas
  if (y >= 60 && mouseX >= x - 160 && mouseX <= x + 160 && mouseY >= y - 100 && mouseY <= y + 100) {
    eat = true;
    fill(255, 0, 0);
    text("nom", mouseX, mouseY);
  } else {
    eat = false;
  }

  console.log(eat);


}

//BANANA "OBJECT"
function banana(x, yOffset) {

  //draw the banana
  noStroke();
  fill(r1, g1, b1);
  arc(x + random(3), y + yOffset, 100, 100, 20, 200, OPEN);

  fill(0);
  arc(x, y + yOffset - 25, 140, 100, 0, 180, OPEN);


  if (y >= -200 && y < 0) {
    r1 = 206;
    g1 = 240;
    b1 = 108;
    textHeader = "Have some more!";
    eat = false;
  }

  //make the banana change color based on y height 
  if (y >= -0 && y < 100) {
    r1 = 226;
    g1 = 250;
    b1 = 108;
    stroke(r1, g1, b1);

  }
  if (y >= 100 && y < 250) {
    r1 = 255;
    g1 = 240;
    b1 = 30;
    stroke(r1, g1, b1);
  }
  if (y >= 250 && y < 450) {
    r1 = 232;
    g1 = 196;
    b1 = 0;
    stroke(r1, g1, b1);
  } else if (y >= 450) {
    r1 = 80;
    g1 = 64;
    b1 = 0;
  }



  //GAME OVER

  //create text
  if (y >= 500) {
    fill(255);
    textSize(20);
    text("NOOOOOOO", x, y + yOffset);
  }

  //erase text
  if (y >= 600) {
    fill(0);
    textHeader = "GAME OVER :(";
  }
}


//EAT FUNCTIONALITY
function mousePressed() {
  if (eat) {

    //put bananas offscreen
    y = -300;

    //white background
    bg = 0;

    textHeader = "+100 points";
  }

  background(0);
}
