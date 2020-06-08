var car, wall;
var speed, weigth;

function setup() {
  createCanvas(1600, 400);

  speed = random(59, 90);
  weigth = random(400, 1500);

  wall = createSprite(1000, 200, 60, height / 2);
  car = createSprite(50, 200, 50, 50);

  car.velocityX = speed;

}

function draw() {
  background(0);

  if(isTouching(car,wall)){
    car.velocityX=0;
    
    var damage = (weigth*speed*speed)/(wall*wall*wall)
    if(damage=3.68){
      wall.shapeColor="green"
    } 
    
    if(damage=12.43){
      wall.shapeColor="red"
    }

    var deformation = (0.5*weigth*speed*speed)/22500;

    if(deformation<100){
      car.shapeColor="green";
    }else if(deformation >= 100 && deformation < 180){
      car.shapeColor="yellow"
    }else if (deformation >= 180){
      car.shapeColor="red"
    }
     
  }

  drawSprites();
}

