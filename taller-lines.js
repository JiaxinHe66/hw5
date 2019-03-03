function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  for (var i = 10; i <= 200; i = i + 5) {
    line(i, 10, i, i * 1.9);
  }
  for (var i = 10; i <= 390; i = i + 5) {
    line(195 + i, 10, 195 + i, 390);
  }
}
