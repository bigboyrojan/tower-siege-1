class Box {
  constructor (x,y,width,height){
  var choices = {
  isStatic : true
  } 
  this.body = Bodies.rectangle(x,y,width,height,choices);
  this.width = width;
  this.height = height;
  
  World.add(world,this.body);
  }
  display(){
  var bruh = this.body.position;
  rectMode (CENTER);
  fill(173,216,230);
  rect(bruh.x, bruh.y,this.width,this.height);
  }
  
  }