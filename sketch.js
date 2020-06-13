var wall,thickness;
var bullet,speed, weigth;

function setup() {
  createCanvas(1600, 400);

  speed = random(233, 321);
  weigth = random(30, 52);
  thickness = random(22, 83);

  wall = createSprite(800, 200,thickness, height / 2);
  bullet = createSprite(50, 200, 20, 50);
  
  bullet.shapeColor="white";
  wall.shapeColor=rgb(80,80,80);

  bullet.velocityX = speed;

}

function draw() {
  background(0);

  if(isTouching(bullet,wall)){
    bullet.velocityX=0;
    var damage = (0.5*weigth*speed*speed)/(wall*wall*wall);
    if(damage>10){
      wall.shapeColor="green";
    }
    else{
      wall.shapeColor="red";
     } 
   drawSprite();
  }
}