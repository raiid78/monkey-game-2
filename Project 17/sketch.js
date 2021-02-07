var monkey, monkey_running;
var banana, bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var survivalTime = 0;
var BananasGroup, ObstaclesGroup;

function preload() {


  monkey_running = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png")

  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");

}



function setup() {
  createCanvas(400,400)
  
  monkey = createSprite(50, 350, 10, 10);
  monkey.addAnimation("MONKEY", monkey_running);
  monkey.scale = 0.1;

  ground = createSprite(200,390,800,20);
  
  BananasGroup = new Group();
  
  ObstaclesGroup = new Group();
}


function draw() {
   background("white");
  
  ground.velocityX = -4;
  
  if(ground.x < 0) {
      ground.x = ground.width/2;
    }
  
  SpawnBananas();
  SpawnObstacles();
  
  if(keyDown("up")) {
    monkey.velocityY = 5;
  }
  
  monkey.velocityY = monkey.velocityY + 0.5;
  monkey.collide(ground);
  
  drawSprites();
}
function SpawnBananas() {
  if(frameCount%80 === 0) {
    banana = createSprite(400,250,10,10);
    banana.y = Math.round(random(120,200));
    banana.addImage("banana", bananaImage);
    banana.scale = 0.1
    banana.velocityX = -2;
    banana.lifetime = 400;
    BananasGroup.add(banana);
  } 
}
function SpawnObstacles() {
  if(frameCount%300 === 0) {
    obstacle = createSprite(400,360,10,10);
    obstacle.addImage("OBSTACLE",obstacleImage);
    obstacle.scale = 0.2;
    obstacle.velocityX = -3;
    obstacle.lifetime = 400;
    ObstaclesGroup.add(obstacle);
  }
}