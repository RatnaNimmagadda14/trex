var trex, trex_running, edges;
var groundImage,ground

function preload(){
  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png")
  groundImage=loadImage("ground2.png")
  
}

function setup(){
  createCanvas(600,200);
  trex=createSprite(100,180,10,20)
  trex.addAnimation("trex",trex_running)
  trex.scale=0.5
  // creating trex
  ground=createSprite(100,190,400,10)
  ground.addImage(groundImage)
}


function draw(){
  //set background color 
  background("white");
  if(keyDown("space")){
    trex.velocityY=-5
  }
  trex.velocityY+=1
  //logging the y position of the trex
  trex.collide(ground)
  drawSprites();
}