let snake;
let food;

function setup() {
  // put setup code here
  let canvasWidth = 600;
  let canvas = createCanvas(canvasWidth, canvasWidth);
  canvas.position(10, 10);

  //initialize objects
  snake = new Snake(0, 0, 15, canvasWidth);
  food = new Food(round(random(600)), round(random(600)), 15, canvasWidth);
}

function draw() {
  // put drawing code here
  background(0, 0, 0);

  snake.update(deltaTime * 0.001);
  snake.render();
  food.render();
}

function keyPressed() {
  snake.setSpeed(50);
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
