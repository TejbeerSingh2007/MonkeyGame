var monkey , monkey_running;
var bananna ,banannaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;

function preload(){
  
  
monkey_running =           loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  banannaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
  foodGroup = createGroup();
  obstacleGroup = createGroup();
}



function setup() {
  createCanvas(600,200); 
  
  monkey = createSprite(80,200,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,200,900,10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  console.log(ground.x);
  
  score = 0;
}


function draw() {
  background(255);
  
  text("Score: "+ score, 500,50);
  score = score + Math.round(getFrameRate()/40);

if(ground.x<0){
   ground.x = ground.width/2;
}
  
if(keyDown("space")){
  monkey.velocityY = -12;
} 
  
monkey.velocityY = monkey.velocityY+0.8;
monkey.collide(ground);
  
  bananna();
  obstacle();

  drawSprites();
}

function bananna(){
  if(frameCount % 80===0){
     var bananna = createSprite(600,120,40,10);
     bananna.y = Math.round(random(80,120));
     bananna.addImage(banannaImage);
     bananna.scale = 0.1;
     bananna.velocityX = -3;
     bananna.lifetime = 200;
     bananna.depth = monkey.depth;
     monkey.depth = monkey.depth + 1;
     foodGroup.add(bananna);
  }
  }

function obstacle(){
 if(frameCount % 80===0){
   var obstacle = createSprite(600,175,10,40);
   obstacle.velocityX = -(6 + score/100);
   obstacle.scale = 0.1;
   obstacle.lifetime = 300;
   obstacleGroup.add(obstacle);  
   obstacle.addImage(obstacleImage);
}
}


