//var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
//var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5;
var roof;
var rope1,rope2,rope3,rope4,rope5;
var bobDiameter;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
 bobDiameter=40

	engine = Engine.create();
	world = engine.world;

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	startBobPositionX=width/2; 
	startBobPositionY=height/4+100; 
	bob1=new Bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter); 
	bob2=new Bob(startBobPositionX-bobDiameter,startBobPositionY,bobDiameter);
	 bob3=new Bob(startBobPositionX,startBobPositionY,bobDiameter);
	  bob4=new Bob(startBobPositionX+bobDiameter,startBobPositionY,bobDiameter); 
	  bob5=new Bob(startBobPositionX+bobDiameter*2,startBobPositionY,bobDiameter);


	roof=new Roof(200,20,1600,20);
	rope1=new Rope(bob1.body,roof.body,-bobDiameter*2, 0) 
	rope2=new Rope(bob2.body,roof.body,-bobDiameter*1, 0)
	 rope3=new Rope(bob3.body,roof.body,0, 0)
	  rope4=new Rope(bob4.body,roof.body,bobDiameter*1, 0) 
	  rope5=new Rope(bob5.body,roof.body,bobDiameter*2, 0)


	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	//World.add(world, ground);

	
	Engine.run(engine);
  
}


function draw() {
 // rectMode(CENTER);
  background("white");
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

 roof.display();

 rope1.display();
 rope2.display();
 rope3.display();
 rope4.display();
 rope5.display();

  drawSprites();
 
}



