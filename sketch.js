const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var world,engine,render;
var paper, ground, dustbin;


function setup() {
	createCanvas(1600, 700);
  
  engine = Engine.create();
  world = engine.world;

  paper = new Paper(1200,50);
  ground = new Ground(800,690,1600,20);
  dustbin = new Dustbin(1200,560);

}


function draw() {
 
  background(230);
 
  Engine.update(engine);
 

  if(keyCode===UP_ARROW){

    Matter.Body.applyForce(body,position,force);
  }

  ground.display();
  dustbin.display();
  paper.display();
 

}

