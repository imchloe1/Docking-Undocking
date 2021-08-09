var bg, sleep, brush, gym, eat, drink, bath, move;
var astronaut;

function preload() {
  bg = loadImage("iss.png");
  sleep = loadAnimation("sleep.png");
  brush = loadAnimation("brush.png");
  bath = loadAnimation("bath1.png","bath2.png");
  gym = loadAnimation("gym1.png","gym2.png");
  eat = loadAnimation("eat1.png","eat2.png");
  drink = loadAnimation("drink1.png","drink2.png");
  move = loadAnimation("move.png","move2.png");

}

function setup() {
  createCanvas(800,400);
  astronaut = createSprite(300,230);
  astronaut.addAnimation("sleeping", sleep);
  astronaut.scale = 0.1;
  
}

function draw() {
  background(255,255,255);
  image(bg, 0, 0, width, height);
  drawSprites();

  textSize(20);
  fill(255);
  text("Instructions: ",30,30);
  text("Up Arrow = Brushing ",30,50);
  text("Down Arrow = Gymming ",30,70);
  text("Left Arrow = Eating ",30,90);
  text("Right Arrow = Bathing ",30,110);
  text("M key = Moving ",30,130);

  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("gymming", gym);
    astronaut.changeAnimation("gymming");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("eating", eat);
    astronaut.changeAnimation("eating");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("bathing", bath);
    astronaut.changeAnimation("bathing");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("M_KEY")){
    astronaut.addAnimation("moving", move);
    astronaut.changeAnimation("moving");
    astronaut.y = 350;
    astronaut.velocityX = 3;
    astronaut.velocityY = 3;
  }
  

  edges= createEdgeSprites();
  astronaut.bounceOff(edges);
  
}

