const Engine =  Matter.Engine;
const World =  Matter.World;
const Bodies =  Matter.Bodies;

var a,ball,ground;
var myengine,myworld;

function setup() {
  createCanvas(400,400);
  myengine = Engine.create();
  myworld = myengine.world;

  ball = Bodies.rectangle(100,100,50,50);
  World.add(myworld,ball);
  console.log(ball);
  console.log(ball.position.x);
  console.log(ball.position.y);
  var options = {
    isStatic: true
  }
  ground = Bodies.rectangle(200,380,400,20,options);
  World.add(myworld,ground);
  var options = {
    restitution:2
  } 
  ball1 = Bodies.circle(300,100,40,options);
  World.add(myworld,ball1); 
}

function draw() {
  background("pink");
  Engine.update(myengine);
 rectMode(CENTER);
 fill("yellow");
  rect(ball.position.x,ball.position.y,50,50);
  fill("green");
  rect(ground.position.x,ground.position.y,400,20);
  fill("lightblue");
  rect(200,200,50,50) ; 
  ellipseMode(RADIUS);
  fill("red");
  ellipse(ball1.position.x,ball1.position.y,40,40);
  
  drawSprites();

}