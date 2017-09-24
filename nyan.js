function setup() { 
  createCanvas(800, 600);
} 

function draw() { 
  
  //define y coordinate for head
  var y = 200;
  var x = 320;
	var w = 260;
  var h = 200;
  
  var ear1X=180;
  var earY=110;
  
  var ear2X= ear1X+60;

  var rainbowY=y+20
  var rainbowH=30;

  background(22, 61, 124);

  fill(255,255,0);
 
    
  //rainbow
    noStroke();
  
    fill(255,0,0);
		rect(0,rainbowY,400,rainbowH);
  
    fill(255,122,0);
		rect(0,rainbowY+rainbowH,400,rainbowH);
  
    fill(255,255,0);
		rect(0,rainbowY+2*rainbowH,400,rainbowH);
    
  	fill(0,255,0);
		rect(0,rainbowY+3*rainbowH,400,rainbowH);
    
  	fill(0,122,255);
  	rect(0,rainbowY+4*rainbowH,400,rainbowH);

  	fill(122,122,255);
  	rect(0,rainbowY+5*rainbowH,400,rainbowH);

  //set stroke weight & color for rest of cat
		strokeWeight(5);
  	stroke(0);
  
  //tail
  fill(160);
  rotate(-0.3*PI);
  rect(x-425,y+175,30,120,20);

  //reset rotation crap
  rotate(-1.7*PI);

  //limbs
  rect(x+10,y+160,40,80,20);
  rect(x+70,y+160,40,80,20);
  
  rect(x+180,y+160,40,80,20);
  rect(x+240,y+160,40,80,20);


  //poptart body
  fill(252, 217, 164);
  rect(x,y,w,h,20);
  
  //poptart frosting
  fill(255, 160, 232);
	
  noStroke();
  rect(x+25,y+25,w-50,h-50);
  
  //face+ears
  stroke(0);
  fill(160);
    
  //ears!! 
  triangle(x+ear1X, y+earY, x+ear1X+70, y+earY, x+ear1X+10, y+earY-50);
  triangle(x+ear2X, y+earY, x+ear2X+70, y+earY, x+ear2X+60, y+earY-50);
    
	//face
  rect(x+165,y+95,160,110,60);
    
	//mouth
	arc(x+270,y+160,40,30,PI/10,PI);    arc(x+230,y+160,40,30,2*PI,0.9*PI);

	//eyes (base)
    
  //ellipse(x+210,y+140,20,20);
  //ellipse(x+290,y+140,20,20);
  fill(0);
  rect(x+205,y+130,15,15);
  rect(x+280,y+130,15,15);

  //nose
  rect(x+245,y+147,7,7);

  //eyes (shiny part)
  fill(255);
  noStroke();
  rect(x+205,y+130,7,7);
  rect(x+280,y+130,7,7);

  //cheeks
  fill(255, 145, 172);
  rect(x+180,y+155,20,20);
  rect(x+295,y+155,20,20);

  
 
  
}
  

