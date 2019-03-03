function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);

  for (var x = 20; x <= 380; x += 20) {
    for (var y = 20; y <= 380; y += 20) {
      ellipse(x, y, 15);
    }
  }
}
