const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,polygon,ground;
var stand1,stand2;
var polygon;
var slingShot;
var polygon_img, backgroundImg;

function preload(){
  bg=loadImage("images/day.jpg")
  polygon_img=loadImage("images/ball.png");
  
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground(width/2,height,width,20);
  stand1 = new Stand(390,300,300,10);
  stand2 = new Stand(700,200,200,10);
 
  //level one
  block1 = new Block(300,275,40,60);
  console.log(block1);
  block2 = new Block(330,275,40,60);
  block3 = new Block(360,275,40,60);
  block4 = new Block(390,275,40,60);
  block5 = new Block(420,275,40,60);
  block6 = new Block(450,275,40,60);
  block7 = new Block(480,275,40,60);
  //level two
  block8 = new Block(330,235,40,60);
  block9 = new Block(360,235,40,60);
  block10 = new Block(390,235,40,60);
  block11 = new Block(420,235,40,60);
  block12 = new Block(450,235,40,60);
  //level three
  block13 = new Block(360,195,40,60);
  block14 = new Block(390,195,40,60);
  block15 = new Block(420,195,40,60);
  //top
  block16 = new Block(390,155,40,60);

  //set 2 for second stand
  //level one
  blocks1 = new Block(640,175,40,60);
  blocks2 = new Block(670,175,40,60);
  blocks3 = new Block(700,175,40,60);
  blocks4 = new Block(730,175,40,60);
  blocks5 = new Block(760,175,40,60);
  //level two
  blocks6 = new Block(670,135,40,60);
  blocks7 = new Block(700,135,40,60);
  blocks8 = new Block(730,135,40,60);
  //top
  blocks9 = new Block(700,95,40,60);

  //polygon holder with slings
  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);
  
  slingShot = new Slingshot(this.polygon,{x:100,y:200});

}
function draw() {
  //background(56,44,44); 
  
    background(bg);
  //Engine.update(engine);
  text(mouseX + ',' + mouseY, 10, 15);
  textSize(20);
  fill("lightyellow");
  
  ground.display();
  stand1.display();
  stand2.display();
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  fill("grey");
  block16.display();
  fill("skyblue");
  blocks1.display();
  blocks2.display();
  blocks3.display();
  blocks4.display();
  blocks5.display();
  fill("turquoise");
  blocks6.display();
  blocks7.display();
  blocks8.display();
  fill("pink")
  blocks9.display();
  fill("gold");
  imageMode(CENTER)
  image(polygon_img ,polygon.position.x,polygon.position.y,40,40);

  slingShot.display();

}
function mouseDragged(){
  Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingShot.fly();
}
function keyPressed(){
  if(keyCode === 32){
      slingShot.attach(this.polygon);
  }
}

