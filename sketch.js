
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var ground,left,right;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}
	//Create the Bodies Here.
	ball=Bodies.circle(60,100,20,ball_options)
	World.add(world,ball)
	Engine.run(engine);
  ground=new Ground(400,670,800,20)
  left=new Ground(600,620,20,120)
  right=new Ground(750,620,20,120)
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x,ball.position.y,20)
  drawSprites();
 ground.show()
 right.show()
 left.show()
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:65,y:-65})
	}
}


