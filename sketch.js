
var PLAY =1
var END=2
var gameState=PLAY;

var invis
var ground
var back2

var runner, runnerImg
var bg, bgImg
var ground, groundImg

function preload(){

  runnerImg=loadAnimation("Assets/Run.png","Assets/Run2.png","Assets/Run3.png","Assets/Run4.png");

  bgImg=loadImage("Assets/Volcano.png")
  back2=loadImage("Assets/Back2.png")
  obstacle1 = loadImage("obstacle1.png");
  obstacle2 = loadImage("obstacle2.png");
  obstacle3 = loadImage("obstacle3.png");


  groundImg=loadImage("Assets/ground.png")
  }

function setup() {
  createCanvas(1000,700)

bg=createSprite(100,450)
bg.addImage(bgImg);

runner=createSprite (250,525)
runner.addAnimation("running", runnerImg);

ground=createSprite(500,675)
ground.addImage(groundImg)

invis=createSprite(500,670,1000,135)
invis.visible=false

score=0
}





function draw() {

 background(back2);

 



 if (gameState===PLAY){
  ground.velocityx=-4
  score=score+Math.round(frameCount/60)
      
  if (ground.x>0){
    ground.x=ground.width/2
  }
 
  if (keyDown(SPACE)&&runner.y>=100){
    
    runner.velocityY=-13
   }
   runner.velocityY = runner.velocityY + 0.8

SpawnObstacles();

if(obstaclesGroup.isTouching(runner)){
  gameState=END
}

}

else if (gameState===END){

ground.velocityX=0

obstaclesGroup.setVelocityXEach(o)
}
runner.collide(invis)
 drawSprites();
}

function SpawnObstacles{
  if (frameCount%60===0){
    var obstacle=createSprite(400,165,10,10)
    obstacle.velocityX=-6;

    var rand=Math.round(random(1,3));
    switch(rand){
      case 1: obstacle.addImage(obstacle1);
      break;
case 2: obstacle.addImage(obstacle2);
      break;
case 3: obstacle.addImage(obstacle3);
      break;
    }
  }
}