
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;




function setup(){
createCanvas(800,400);
	engine = Engine.create();
	world = engine.world;

	
	ground = new Ground(400,380,800,20)

	paper = new Paper(150,375,20,20)
	dustbin1 = new Dustbin(450,360,100,20)
	
		
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  paper.display();
  dustbin1.display();
drawSprites();  
}
function KeyPressed(){
	if(keyCode === UP_AAROW)
	Matter .Body.applyforce(paper.body,paper.body.position,{x:85,y:85})
	Matter .Body.setStatic(paper,false)
	
	}