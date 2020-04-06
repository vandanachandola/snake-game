let snake;
let food;

function setup() {
  // put setup code here
  let canvasWidth = 450;
  let canvas = createCanvas(canvasWidth, canvasWidth);
  canvas.position(10, 10);
  let scale = 15;

  //initialize objects
  snake = new Snake(0, 0, 1, 1, scale, canvasWidth);

  let upperLimit = canvasWidth / scale;
  let xpos = int(random(upperLimit)) * scale;
  let ypos = int(random(upperLimit)) * scale;
  food = new Food(xpos, ypos, scale);
  frameRate(1);
}

function draw() {
  // put drawing code here
  background(0, 0, 0);

  snake.update();
  snake.render();
  food.render();
}

function keyPressed() {
  if (keyCode == LEFT_ARROW) {
    snake.setDirection(direction.LEFT);
  } else if (keyCode == RIGHT_ARROW) {
    snake.setDirection(direction.RIGHT);
  } else if (keyCode == UP_ARROW) {
    snake.setDirection(direction.UP);
  } else if (keyCode == DOWN_ARROW) {
    snake.setDirection(direction.DOWN);
  }
}
