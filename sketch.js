
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dn1,dn2,dn3;
var paper;
var ground;

function setup() {
createCanvas(800, 700);
engine = Engine.create();
world = engine.world;

dn1 = new Dustbin(540,627,20,120);
dn2 = new Dustbin(650,680,200,20);
dn3 = new Dustbin(750,627,20,120);

paper = new Paper(50,695,60);
    
ground = new Ground(600,height,1200,20);
	
Engine.run(engine);
  
}
function draw() {
rectMode(CENTER);
background(0);

dn1.display();
dn2.display();
dn3.display();
paper.display();
ground.display(); 

drawSprites();
}

function keyPressed(){
if(keyCode === UP_ARROW)
Matter.Body.applyForce(paper.body,paper.body.position,{x:580,y:-580})
}


