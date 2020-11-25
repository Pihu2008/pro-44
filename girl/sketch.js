var girlImg;
var back;
var count = 0;
var invisibleGround;

function preload(){
girlImg = loadAnimation("2.png","3.png","4.png","5.png","6.png");
back = loadImage("1.jpg");
}

function setup() {
  createCanvas(1160,550);
  backImg = createSprite(580, 275, 1160, 550);
  backImg.addImage(back);
  backImg.scale = 2;
  invisibleGround = createSprite(200,399,400,5);
 // invisibleGround.visible = false;
  girl = createSprite(200, 370, 50, 50);
  girl.addAnimation("walking",girlImg);
  girl.scale = 0.5;
}

function draw() { 
 // text("Score: "+ count, 250, 100);
  backImg.velocityX = -(6 + 2*count/100);
  count = count + Math.round(World.frameRate/40);
  if (backImg.x < 0){
   backImg.x = backImg.width/2;
  }
  girl.collide(invisibleGround);
  if(keyWentDown("space")&& girl.x > 390){
    girl.velocityY = -12 ;
  }

  //add gravity
  girl.velocityY = girl.velocityY + 0.8;
 //girl.velocityX = 2;
 //camera.position.x = girl.x;
  drawSprites();
}
function spawnObstacles() {
  if(World.frameCount % 60 === 0) {
    var obstacle = createSprite(400,365,10,40);
    obstacle.velocityX = - (6 + 3*count/100);
    
    //generate random obstacles
    var rand = randomNumber(1,6);
    obstacle.setAnimation("obstacle" + rand);
    
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.5;
    obstacle.lifetime = 70;
    //add each obstacle to the group
    ObstaclesGroup.add(obstacle);
  }
}