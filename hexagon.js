class Shape {
constructor(x,y,radius){
   var choices = {
    isStatic: true,
   } 
   this.polygon = Bodies.circle(x,y,radius);
   this.radius = radius;
   this.image = loadImage("polygon.png")
   World.add(world,this.polygon)

}
display(){
var object = this.body.position;
ellipseMode(CENTER)
imageMode(CENTER)
image(this.image,object.x,object.y,this.radius);
}
}