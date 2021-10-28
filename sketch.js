var boy,boy_running;
var stone,boy_running;

function preload(){

    boy_running= loadAnimation("run (1).png","run (2).png","run (3).png","run (4).png","run (5).png");
    stone1= loadAnimation("stone slab-1.png");
    stone2= loadAnimation("stone slab-2.png");
    lava_grd= loadAnimation("floor is lava bg-2.png","floor is lava bg.png");
}

function setup() {
    createCanvas(windowWidth, windowHeight);

    boy= createSprite(50,180,20,50);
    boy.addAnimation("running",boy_running);

   lavagrd = createSprite(width/2,height,width,2);
   lavagrd.addImage("lava", lava_grd);
   lavagrd.x = lavagrd.width /2;

   invisibleGround = createSprite(width/2,height-10,width,125);
   invisibleGround.visible = false;

   stoneGroup = new Group();
  
}

function draw() {
 
    background(225);
    
    if(keyDown("space") && boy.y >= 159) {
        boy.velocityY = -12;
      }
    
      boy.velocityY = boy.velocityY + 0.8
    
      if (lavagrd .x < 0){
        lavagrd .x =lavagrd .width/2;
      }
    
      boy.collide(invisibleGround);



    drawSprites();
}

function spawnStones() {
    if(frameCount % 60 === 0) {
       stone = createSprite(600,165,10,40);
      //obstacle.debug = true;
      obstacle.velocityX = -(6 + 3*score/100);
      
      //generate random obstacles
      var rand = Math.round(random(1,2));
      switch(rand) {
        case 1: stone.addImage(stone1);
                break;
        case 2: stone.addImage(stone2);
                break;
        default: break;
      }
      
      //assign scale and lifetime to the obstacle           
      stone.scale = 0.5;
      stone.lifetime = 300;
      //add each obstacle to the group
      stoneGroup.add(stone);
    }
  }