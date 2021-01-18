
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
 var engine,world;

var dustBin1,dustBin2,dustBin3,dustBinImage;
var paper;
//var invisible;
var ground;

function preload()
{
    
 dustBinImage = loadImage("dustbingreen.png")

}

function setup() {
	createCanvas(800, 500);

	engine = Engine.create();
	world = engine.world;

 

	//Create the Bodies Here.
    dustBin1 = new DustBin(650,440,100,10);
    dustBin2 = new DustBin(700,390,10,100);
    dustBin3 = new DustBin(590,390,10,100);
    paper  = new Paper(200,440);
    ground = new Ground(400,450,900,10);
    

	Engine.run(engine);
  
}


function draw() {
  background("lightBlue");
  
  ground.display();
  dustBin1.display();
  dustBin2.display();
  dustBin3.display();

  imageMode(CENTER)
  image(dustBinImage,650,370,150,150);

 
 paper.display();
 
 

  
  
 
}

function keyPressed(){

if(keyCode  === UP_ARROW){

 Matter.Body.applyForce(paper.body,paper.body.position = {x:60,y:-65})


}


}


