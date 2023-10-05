let mipelota;

function setup() {
  createCanvas(windowWidth, windowHeight);
  mipelota = new Pelota();
}

function draw() {
  background(255);
  circle(mouseX, mouseY, 20);
  mipelota.update(300);
  mipelota.display();
}
