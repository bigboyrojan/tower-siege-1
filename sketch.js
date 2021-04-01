const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var floor, stand, stand2;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16;
var polygon;
var slingshot;
function preload(){
}

function setup() {
createCanvas(800,700);
engine = Engine.create();
	world = engine.world;
    
floor = new Base(400,400,800,10);
stand = new Base(200,300,300,10);
stand2 = new Base(750,200,300,10);
box1 = new Box(80,270,50,50);
box2 = new Box(150,270,50,50);
box3 = new Box(220,270,50,50);
box4 = new Box(290,270,50,50);
box5 = new Box(115,220,50,50);
box6 = new Box(185,220,50,50);
box7 = new Box(255,220,50,50);
box8 = new Box(150,170,50,50);
box9 = new Box(220,170,50,50);
box10 = new Box(185,120,50,50);
box11 = new Box(630,170,50,50);
box12 = new Box(700,170,50,50);
box13 = new Box(770,170,50,50);
box14 = new Box(665,120,50,50);
box15 = new Box(735,120,50,50);
box16 = new Box(700,70,50,50);
polygon = new Shape(390,50,50);
slingshot = new SlingShot(this.polygon,{x:430,y:50});
Engine.run(engine);
}

function draw() {
    Engine.update(engine);
floor.display();
stand.display();
stand2.display();
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
box9.display();
box10.display();
box11.display();
box12.display();
box13.display();
box14.display();
box15.display();
box16.display();
slingshot.display();
polygon.display();
drawSprites();
}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}