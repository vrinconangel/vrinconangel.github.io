function setup() {
  createCanvas(870, 600);
}

function draw() {
  background(0);
  arc(mouseX, mouseY, 100, 110, QUARTER_PI, PI+HALF_PI+QUARTER_PI);
  fill(255, 102, 102);
  strokeWeight(20);
  
}