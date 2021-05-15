var mouse,cat,mouseimg,mouseteasing,catimg,catwalking,catstanding,mousehappy,bgimg,backg;
function preload() {
    //load the images here
    mouseimg=loadAnimation("images/mouse2.png");
    mouseteasing=loadAnimation("images/mouse3.png","images/mouse4.png");
    mousehappy=loadAnimation("images/mouse1.png");
    catimg=loadAnimation("images/cat1.png");
    catwalking=loadAnimation("images/cat2.png","images/cat3.png");
    catstanding=loadAnimation("images/cat4.png");
    bgimg=loadAnimation("images/garden.png");
}

function setup(){
    createCanvas(900,700);
    //create tom and jerry sprites here
    backg=createSprite(450,350);
    backg.addAnimation("background",bgimg);

    mouse=createSprite(120,600,40,50);
    mouse.addAnimation("standing",mouseimg);
    mouse.scale=0.1;

    cat=createSprite(800,600,60,70);
    cat.addAnimation("sitting",catimg);
    cat.scale=0.15;
}

function draw() {

    background(0);
    collide();
        drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if (keyCode===RIGHT_ARROW){
  mouse.addAnimation("teasing",mouseteasing);
  mouse.changeAnimation("teasing",mouseteasing);
  mouse.frameDelay=25;
  }
 if(keyCode===LEFT_ARROW){
     cat.addAnimation("standing",catstanding);
     cat.changeAnimation("standing",catstanding);
     cat.velocityX=-3;
     cat.addAnimation("walking",catwalking);
     cat.changeAnimation("walking",catwalking);
 }
}
function collide(){
    if(cat.x-mouse.x<cat.width/2+mouse.width/2
        && mouse.x-cat.x<cat.width/2+mouse.width/2
        && cat.y-mouse.y<cat.height/2+mouse.height/2
        && mouse.y-cat.y<cat.height/2+mouse.height/2){
            
           mouse.addAnimation("happy",mousehappy);
           mouse.changeAnimation("happy",mousehappy);
           cat.velocityX=0;
           cat.changeAnimation("sitting",catimg);
           return true;
        }
        else{
            return false;
        }
}