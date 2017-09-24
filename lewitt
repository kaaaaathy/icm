//variables for line-drawing
let x, y;

//variable for diagonal line-drawing
let offset;

//variables for defining quadrant bounds [see "setup()"]
let q1, q2, q3, q4;


function setup() {
  createCanvas(700, 700);

  //make bg off-white
  background(250);

  //define offset
  offset = width/50;
  
  //define start and end points for each quadrant [4]
  //q1 values are re-used in "randomLines()"
  q1 = {
    x1: 0,
    y1: 0,
    x2: width / 2,
    y2: height / 2,
  }

  q2 = {
    x1: width / 2,
    y1: 0,
    x2: width,
    y2: height / 2,
  }

  q3 = {
    x1: 0,
    y1: height / 2,
    x2: width / 2,
    y2: height,
  }
  
  q4 = {
    x1: width / 2,
    y1: height / 2,
    x2: width,
    y2: height,
  }

}


function draw() {
/* loop the background to slowly erase */

  frameRate(60);

  strokeWeight(1);
  
  //opacity controls speed of fade
  background(250, 250, 250, 5);

  //clear the background when user hits "RETURN"
  if (keyIsPressed === true && keyCode === 13) {
      background(250);
  }


}

function mousePressed() {
/* define what happens when I click in each quadrant */
  
  //QUADRANT 1
  //first locate mouse: "Is it in this quadrant?"
  if (mouseX >= q1.x1 && mouseX <= q1.x2 && mouseY >= q1.y1 && mouseY <= q1.y2) {
    //if so, draw lines
    randomLines();
  }

  //QUADRANT 2
  //do the same as Q1 but translated to q2
  if (mouseX >= q2.x1 && mouseX <= q2.x2 && mouseY >= q2.y1 && mouseY <= q2.y2) {
    push();
    translate(q2.x1, q2.y1);
    randomLines();
    pop();
  }

  //QUADRANT 3
  if (mouseX >= q3.x1 && mouseX <= q3.x2 && mouseY >= q3.y1 && mouseY <= q3.y2) {
    push();
    translate(q3.x1, q3.y1);
    randomLines();
    pop();
  }

  //QUADRANT 4
  if (mouseX >= q4.x1 && mouseX <= q4.x2 && mouseY >= q4.y1 && mouseY <= q4.y2) {
    push();
    translate(q4.x1, q4.y1);
    randomLines();
    pop();
  }
}http://alpha.editor.p5js.org/kathymakes/sketches

function randomLines() {
/*
create lines based on random number 
[based on values for q1]
*/

  //generate random number
  let r = floor(random(1, 5));
  console.log(r);
  
	//draw various lines depending on r
  
	if (r == 1) {
    //draw vertical lines
    for (x = 0; x <= q1.x2; x += 10) {
      line(x, 0, x, q1.y2);
    }
  }

  if (r == 2) {
    //draw horizontal lines
    for (y = 0; y <= q1.y2; y += 10) {
      line(q1.x1, y, q1.x2, y);
    }
  }

  if (r == 3) {
    //draw diagonal lines from top-right
    for (x = q1.x2; x >= 0+offset && x <= q1.x2; x -= offset) {
      for (y = q1.y1; y >= 0 && y <= q1.y2 - offset; y += offset) {
        line(x, y, x - offset, y + offset);
      }
    }
  }

  if (r == 4) {
    //draw diagonal lines from top-left
    for (x = q1.x1; x >= q1.x1 && x <= q1.x2 - offset; x += offset) {
      for (y = q1.y1; y >= 0 && y <= q1.y2 - offset; y += offset) {
        line(x, y, x + offset, y + offset);
      }
    }
  }
}
