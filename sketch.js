
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground1, paper1;
var dustbin1, dustbin2, dustbin3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	paper1 = new Paper(100, 600, 10);
	ground1 = new Ground(400, 680, 800, 20);

	dustbin1 = new Dustbin(550,620,20,100);
	dustbin2 = new Dustbin(635,660,150,20);
	dustbin3 = new Dustbin(720,620,20,100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  Engine.update(engine);

  //keyPressed();
  
  ground1.display();
  paper1.display();

  dustbin1.display();
  dustbin2.display();
  dustbin3.display();

  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:15,y:-15});

	}
}



