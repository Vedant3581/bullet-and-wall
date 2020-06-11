var wall,thickness;
var bullet,speed, weigth;

function setup() {
  createCanvas(1600, 400);

  speed = random(59, 90);
  weigth = random(400, 1500);

  wall = createSprite(1000, 200, 60, height / 2);
  bullet = createSprite(50, 200, 50, 50);

  bullet.velocityX = speed;

}

function draw() {
  background(0);

  if(isTouching(bullet,wall)){
    bullet.velocityX=0;
    var damage = (0.5*weigth*speed*speed)/(wall*wall*wall);
    
      wall.shapeColor="green";
  }
     else{
      wall.shapeColor="red";
    }
  drawSprites();
}