let dim1 = 50;
let dim2 = 30;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background("black");
  fill("green");
  randomSeed(99);
  let row = 0;

  for (let ypos = dim1 / 2; ypos <= height; ypos += 1.5 * dim1) {
    for (let xpos = dim1 / 2; xpos <= width; xpos += 3 * dim1) {
      let xoff = random(-20, 20);
      let yoff = random(-20, 20);
      if (row % 2 == 0) {
        ellipse(xpos + xoff, ypos + yoff, dim1, dim1);
        ellipse(xpos + 1.5 * dim1 + xoff, ypos + yoff, dim2, dim2);
      } else {
        ellipse(xpos + xoff, ypos + yoff, dim2, dim2);
        ellipse(xpos + 1.5 * dim1 + xoff, ypos + yoff, dim1, dim1);
      }
    }
    row++;
  }
}