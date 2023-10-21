pelotas = [];
const NP = 200;
let fondoColor;

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < NP; i++) {
    let pelota = new Pelota();
    pelotas.push(pelota);
    fondoColor = color(random(255), random(255), random(255));
  }
  print(pelotas);
}

function draw() {
  background(fondoColor);
  for (let i = 0; i < NP; i++) {
    pelotas[i].update(windowHeight);
    pelotas[i].display();
  }
}
