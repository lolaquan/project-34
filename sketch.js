const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

  var ground;

function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
  world = engine.world;
  ball1 = new Ball(200, 200, 80, 80);
  ball2 = new Ball(280, 200, 80, 80);  
  ball3 = new Ball(360, 200, 80, 80);
  ball4 = new Ball(440, 200, 80, 80);
  rope1 = new Chain(ball1.body, {x: 500, y: 150});
  rope2 = new Chain(ball2.body, {x: 580, y: 150});
  rope3 = new Chain(ball3.body, {x: 660, y: 150});
  rope4 = new Chain(ball4.body, {x: 740, y: 150});
}
 


function draw() {
  background("black");
  Engine.update(engine);
 ball1.display();
 rope1.display();
 ball2.display();
 rope2.display();
 ball3.display();
 ball4.display();
 rope3.display();
 rope4.display();
}

function mouseDragged() {
  Matter.Body.setPosition(ball1.body, {x: mouseX, y: mouseY})
}

/*function mouseReleased() {
  rope.fly();
}*/