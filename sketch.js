//creates the variables
let snake;
let rez = 20;
let food;
let w;
let h;
//var score = 0;
//var highScore = 0;

function setup() {
  //creates canvass
  createCanvas(800, 800);
  
  //gives values to variables w and h
  w = floor(width / rez);
  h = floor(height / rez);
  
  //refreshes code every 5 times a secound
  frameRate(5);
  
  //creates a snake
  snake = new Snake();
  
  //creates the food
  foodLocation();
}

function foodLocation() {
  //gives a random location to the food
  let x = floor(random(1,w));
  let y = floor(random(1,h));
  
  //creates the food
  food = createVector(x, y);

}

function keyPressed() {
  //changes direction of the snake
  if (keyCode === LEFT_ARROW) {
    snake.setDir(-1, 0);
  } else if (keyCode === RIGHT_ARROW) {
    snake.setDir(1, 0);
  } else if (keyCode === DOWN_ARROW) {
    snake.setDir(0, 1);
  } else if (keyCode === UP_ARROW) {
    snake.setDir(0, -1);
  } else if (key == ' ') {//grows the snake if another key is pressed
    snake.grow();
    //score++
  }

}

function draw() {
  //gives the size to the canvas
  scale(rez);
  //console.log(score, highScore);
  
  //bk color
  background(0, 255 , 255);
  //if (score >= highScore){
    //highScore = score;
  //}
  
  //repositions food when eaten and grows snake
  if (snake.eat(food)) {
    foodLocation();
    //score++
  }
  
  //makes the snake move
  snake.update();
  
  //displays the snake
  snake.show();

  //ends the game
  if (snake.endGame()) {
    //prints the game has ended in the console
    print("END GAME");
    
    //changes the background colour
    background(255, 0, 255);
    //score = 0;
   
    //stops the function draw from repeating
    noLoop();
  }
  else{
  //diplays the food as red, no border and a square a the position
  noStroke();
  fill(255, 0, 0);
  rect(food.x, food.y, 1, 1);
  }
}