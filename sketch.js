let snake;
let food;
let canvasWidth = 450;
let scale = 15;
let upperLimit = canvasWidth / scale;

function setup() {
  let canvas = createCanvas(canvasWidth, canvasWidth);
  canvas.position(10, 10);

  //initialize objects
  snake = new Snake(0, 0, 1, 1, scale, canvasWidth);

  //initialize random food location
  initFoodLocation();

  //set frame rate
  frameRate(10);
}

function draw() {
  background(0, 0, 0);

  snake.update(food);
  if (snake.eat(food)) {
    initFoodLocation();
  }
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

function initFoodLocation() {
  let xpos = int(random(upperLimit)) * scale;
  let ypos = int(random(upperLimit)) * scale;
  food = new Food(xpos, ypos, scale);
}
