const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var bob1, rod;
var chain;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	rod = new Rod(50, 400, 400, 100); 
	bob1 = new Bob(300, 400, 25); 
	bob2 = new Bob(300, 425, 25); 
	bob3 = new Bob(300, 450, 25); 
	bob4 = new Bob(300, 475, 25); 
	chain= new Chain(rod.body, bob1.body);
	chain2= new Chain(rod.body, bob2.body);
	chain3= new Chain(rod.body, bob3.body);
	chain4= new Chain(rod.body, bob4.body);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
    rod.display(); 
	bob1.display();  
	bob2.display(); 
	bob3.display();  
	bob4.display();  
	chain.display(); 
	chain2.display(); 
	chain3.display(); 
	chain4.display(); 
  drawSprites();
 
}



