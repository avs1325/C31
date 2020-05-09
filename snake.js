class Snake {
  
  constructor() {
  	this.body = [];
    this.body[0] = createVector(floor(w/2), floor(h/2));
    this.xdir = 0;
    this.ydir = 0;
    this.len = 0;
  }
  //changes direction of movement
  setDir(x, y) {
  	this.xdir = x;
    this.ydir = y;
  }
  
  //makes it move
  update() {
    //creates a new block
  	let head = this.body[this.body.length-1].copy();
    
    //removes the last block
    this.body.shift();
    
    //gives the new x and y
    head.x += this.xdir;
    head.y += this.ydir;
    
    //adds the new block
    this.body.push(head);
  }
  
  //makes the snake grow
  grow() {
    //creates a new block
  	let head = this.body[this.body.length-1].copy();
    
    //increases the enght value
    this.len++;
    
    //adds the new block
    this.body.push(head);
  }
  
  //ends the game when true is returned
  endGame() {
    //records the x and y of the head
  	let x = this.body[this.body.length-1].x;
    let y = this.body[this.body.length-1].y;
   
    //gives some of the parameters for ending such as touching the      edges
    if(x > w-1 || x < 0 || y > h-1 || y < 0) {
       return true;
       //this.len = 0;
    }
    
    //gives parameters such as touching itself
    for(let i = 0; i < this.body.length-1; i++) {
    	let part = this.body[i];
      if(part.x == x && part.y == y) {
        return true;
        //this.len = 0;
      }
    }
    
    //returns false otherwise
    return false;
  }
  
  //gives the snake the power to eat
  eat(pos) {
    //records x and y
  	let x = this.body[this.body.length-1].x;
    let y = this.body[this.body.length-1].y;
    
    //makes the snake grow in case it "eats" the object 
    if(x == pos.x && y == pos.y) {
      //makes it grow
      this.grow();
      
      //tells us it has eaten the oject
      return true;
    }
    
    //tells us it has not eaten the oject
    return false;
  }
  
  //displays the snake
  show() {
  	for(let i = 0; i < this.body.length; i++) {
      //gives the object colour
      fill(random(0,255), random(0,255), random(0,255));
      
      //gives it no border
      noStroke();
      
      //gives the courdinates and size of the object
      rect(this.body[i].x, this.body[i].y, 1, 1)
    }
  }

}