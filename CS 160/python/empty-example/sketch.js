function setup() {
createCanvas(1800, 870);
}

function draw() {
  if (mouseIsPressed) {
    fill(80, 50, 170);
  } else {
    fill(245, 27, 27);
  }
  ellipse(mouseX,mouseY,80,80);
}