var monkey, monkey_running
var banana, bananaImage, obstacle, obstacleImage
var foodGroup, obstacleGroup
var score= 0;
var ground
var PLAY=1;
var END=0;
var gameState=1

function preload() {


  monkey_running = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png")

  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");


}



function setup() {
  createCanvas(700, 500)

  monkey = createSprite(70, 430, 10, 10)
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.175

  ground = createSprite(350, 500, 700, 30);
  ground.shapeColor = "green";

  foodGroup = new Group();
  obstacleGroup= new Group();
}


function draw() {
  console.log(gameState);
  
  if(gameState=== PLAY){
     background("lightBlue")

  if (monkey.isTouching(foodGroup)) {

    score = score + 1;
    
    foodGroup.destroyEach();
    
  }
  
  if(monkey.isTouching(obstacleGroup)){
    
    gameState= END;
    
    
  }


  if (keyDown("space") && monkey.y > 430) {

    monkey.velocityY = -22

  }

  monkey.velocityY = monkey.velocityY + 0.8;
  monkey.collide(ground);
  
  text("score "+score,550, 50);


  rocks();
  bannanas();
  drawSprites();
    
    
  }
  
  else if (gameState=== END){
    
    background(0);
    textSize(30) 
    text("your final score was "+score, 200, 250);
    text("press r to restart", 200, 350)
    if(keyDown("r")){
      
      gameState= PLAY;
    }
    
    
  }


}



function bannanas() {
  if (frameCount % 110 == 0) {

    banana = createSprite(700, 250, 10, 10);
    banana.addImage(bananaImage);
    banana.velocityX = -6;
    banana.scale= 0.15;
    banana.y= Math.round(random(140, 300));
    banana.lifetime= 125;
   

    foodGroup.add(banana);

  }

}

function rocks(){
  if(frameCount% 150== 0){
  obstacle= createSprite(700,455);
  obstacle.addImage(obstacleImage);
  obstacle.velocityX= -7;
  obstacle.scale=.25;
  obstacle.lifetime= 120;
  obstacleGroup.add(obstacle);
  }
  
}