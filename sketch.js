
var block;
var block2;
var block3;

function setup() {
  createCanvas(800,400);
  block = createSprite(400, 200, 50, 50);
  block2 = createSprite(200,100,5,50);
  block3 = createSprite(300,100,50,50);
}

function draw() {
  background(255,255,255);  
block2.y = mouseY;
block2.x = mouseX; 
  

drawSprites();

collisionDetection(block2,block3);
collisionDetection(block2,block);
}


function collisionDetection (object1,object2){
  if((object1.x-object2.x < object1.width/2 + object2.width/2)
  && (object1.y-object2.y < object1.height/2 + object2.height/2)
  && (object2.y-object1.y < object2.height/2 + object1.height/2)
  && (object2.x-object1.x < object2.width/2 + object1.width/2)){
  
  
    object1.shapeColor = "red";
    object2.shapeColor = "yellow";
  }
}