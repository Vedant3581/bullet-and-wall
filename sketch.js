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
    
    var damage = (0.5*weigth*speed*speed)/(wall*wall*wall)
    if(damage<10){
      wall.shapeColor="green"
    } 
    
    if(damage >= 10){
      wall.shapeColor="red"
    }

    var deformation = (0.5*weigth*speed*speed)/22500;

    if(deformation<100){
      bullet.shapeColor="green";
    }else if(deformation >= 100 && deformation < 180){
      bullet.shapeColor="yellow"
    }else if (deformation >= 180){
      bullet.shapeColor="red"
    }
     
  }

  drawSprites();
}

