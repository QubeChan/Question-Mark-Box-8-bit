// I made a global variable called qubePixel to represent the length I want the pixel to be
let qubePixel = 40;
// Made canvasX and canvasY to represent the x and y axis of the canvas but also to make it easier for 
let canvasX = 640;
let canvasY = 640;

function setup() {
	createCanvas(canvasX, canvasY);
}

function draw() {
	background(220);

	// Changed the outline of the shape to be thicker
	strokeWeight(80);

	// I made a square to start off Mario's Question Mark Block(QMB)! It's yellow expanding from the center with a black outline
	stroke(0);
	fill("yellow");
	rectMode(CENTER);
	rect(canvasX / 2, canvasY / 2, 640, 640);

	// We will draw 4 points of the QMB because it has 4 points in the game!
	rectMode(CORNER);
	// The shapes following noStroke() will have no outlined color
	noStroke();
	fill("black");
	rect(qubePixel * 2, qubePixel * 2, qubePixel, qubePixel); // Top left corner
	rect(qubePixel * 2, qubePixel * 13, qubePixel, qubePixel); // Bottom left corner
	rect(qubePixel * 13, qubePixel * 2, qubePixel, qubePixel); // Top right corner
	rect(qubePixel * 13, qubePixel * 13, qubePixel, qubePixel); // Bottom right corner

	// Corners of the box
	rect(qubePixel * 0, qubePixel * 0, qubePixel * 2, qubePixel * 2)
	rect(qubePixel * 0, qubePixel * 14, qubePixel * 2, qubePixel * 2);
	rect(qubePixel * 14, qubePixel * 0, qubePixel * 2, qubePixel * 2);
	rect(qubePixel * 14, qubePixel * 14, qubePixel * 2, qubePixel * 2);

	// We're going to make the shadow of the QMB
	rect(qubePixel * 6, qubePixel * 5, qubePixel * 3, qubePixel * 1);
	rect(qubePixel * 4, qubePixel * 6, qubePixel * 3, qubePixel * 1);
	rect(qubePixel * 12, qubePixel * 5, qubePixel * 1, qubePixel * 3);
	rect(qubePixel * 11, qubePixel * 7, qubePixel * 1, qubePixel * 1);
	rect(qubePixel * 9, qubePixel * 8, qubePixel * 3, qubePixel * 1);
	rect(qubePixel * 7, qubePixel * 9, qubePixel * 3, qubePixel * 1);
	rect(qubePixel * 9, qubePixel * 11, qubePixel * 1, qubePixel * 1);
	rect(qubePixel * 6, qubePixel * 12, qubePixel * 4, qubePixel * 1);

	// We're going to draw a question mark for the QMB
	fill("white");
	rect(qubePixel * 5, qubePixel * 3, qubePixel * 7, qubePixel * 2);
	rect(qubePixel * 3, qubePixel * 4, qubePixel * 3, qubePixel * 2);
	rect(qubePixel * 9, qubePixel * 3, qubePixel * 3, qubePixel * 4);
	rect(qubePixel * 6, qubePixel * 7, qubePixel * 5, qubePixel * 1);
	rect(qubePixel * 6, qubePixel * 8, qubePixel * 3, qubePixel * 1);
	rect(qubePixel * 6, qubePixel * 10, qubePixel * 3, qubePixel * 2);

	/*
	I used this for positioning my shapes now that it's a finished sketch I just commented it out
	// This will print my x and y coordinates when the mouse is pressed.
	if (mouseIsPressed) {
		print(`mouseX is at ${mouseX} and mouse Y is at ${mouseY}`);

		// I created this rounded square so it would display as long as long as the mouse is pressed or held down
		// The shapes following noStroke() will have no outlined color
		noStroke();
		fill(0, 0, 0, 255 * 0.5); // This is the values for yellow at 50% opacity
		rectMode(CORNER);
		rect(mouseX, mouseY, qubePixel, qubePixel, 10);
	}
	*/

	// EASTER EGG TIME! This guy will act like what happens when Mario hits the QMB in the game!
	if (mouseIsPressed) {
		fill("brown");
		rect(80, 40, 480, 560);
		rect(40, 80, 560, 480);
		fill("black");
		rect(qubePixel * 2, qubePixel * 2, qubePixel, qubePixel);
		rect(qubePixel * 2, qubePixel * 13, qubePixel, qubePixel);
		rect(qubePixel * 13, qubePixel * 2, qubePixel, qubePixel);
		rect(qubePixel * 13, qubePixel * 13, qubePixel, qubePixel);
	}
}