var x; //Must declare global variables outside of functions if they are to be shared between functions

setup = function(){
	createCanvas(600,400);
	x=200;
}

draw = function(){
	background(100);

	////////////////
	//START OF CAR//
	////////////////
	rectMode(CORNER);
	strokeWeight(0);
	stroke(0);

	//body
	fill(225,0,0);
	rect(50,100,150,80);

	//just to show where rectangles are drawn from (upperleft corner)
	stroke(0,225,0);
	strokeWeight(5);
	point(50,100);
	strokeWeight(0);
	stroke(0);

	//wheels
	fill(0);
	rect(50,75, 50,25);
	rect(150,75, 50,25);
	rect(50,180, 50,25);
	rect(150,180, 50,25);

	//glass
	fill(0,0,225);
	ellipse(100,140,80,60);

	//lights
	fill(225,225,0);
	rect(190,100, 10,20);
	rect(190,160, 10,20);

	//decals
	strokeWeight(2);
	line(150,140,200,140);
	line(160,130,200,130);
	line(160,150,200,150);
	line(170,160,200,160);
	line(170,120,200,120);

	//flag w/name
	stroke(225);
	fill(225);
	line(200,100,180,50);
	rect(110,30, 75,25);
	textSize(20);
	fill(0);
	text("Speedy", 115, 50);

	//////////////
	//END OF CAR//
	//////////////


	///////////////////
	//START OF MINION//
	///////////////////

	//Settings
	ellipseMode(CENTER);
	strokeWeight(0);
	stroke(0);

	//Head
	fill(200,200,0);
	ellipse(x+200,200, 100);

	//body
	rectMode(CENTER);
	rect(x+200,250, 100, 100);

	//arm1
	strokeWeight(15);
	stroke(200,200,0);

	line(x+250, 300, x+300, 275);

	strokeWeight(0);
	stroke(0)

	//hand1
	fill(0);
	ellipse(x+300, 275, 20, 25);

	//fingers1
	strokeWeight(10);
	stroke(0);

	line(x+300, 275, x+310, 250);
	line(x+300, 275, x+325, 260);
	line(x+300, 275, x+330, 270);

	strokeWeight(0);
	stroke(0);

	//pants
	fill(0,50,200);
	rect(x+200,300, 100, 40);

	//legs
	fill(0,50,200);
	rect(x+220,330, 20, 40);
	rect(x+180,330, 20, 40);

	//arm 2
	strokeWeight(15);
	stroke(200,200,0);
	line(x+215, 300, x+265, 275);

	strokeWeight(0);
	stroke(0)

	//hand2
	fill(0);
	ellipse(x+265, 275, 20, 25);

	//fingers2
	strokeWeight(10);
	stroke(0);

	line(x+265, 275, x+275, 250);
	line(x+265, 275, x+290, 260);
	line(x+265, 275, x+295, 270);

	strokeWeight(0);
	stroke(0);

	//feet
	fill(10);
	strokeWeight(4);
	ellipse(x+225, 350, 30,20);
	ellipse(x+175, 350, 30,20);

	//eyes
	fill(225);
	strokeWeight(5);
	ellipse(x+200,200, 50);

	fill(0);
	stroke(200,100,0);
	strokeWeight(6);
	ellipse(x+207,200, 15);
	strokeWeight(0);
	stroke(0);

	fill(0);
	rect(x+237,200, 32, 10);
	rect(x+163,200, 32, 10);

	//mouth
	fill(0);
	strokeWeight(5);
	ellipse(x+200,255, 15);

	//hair
	fill(0);
	strokeWeight(2);
	line(x+200,155,x+200,140)

	line(x+210,155,x+210,140)
	line(x+190,155,x+190,140)

	line(x+220,155,x+220,140)
	line(x+180,155,x+180,140)

	/////////////////
	//END OF MINION//
	/////////////////
}