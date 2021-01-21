
var wall,bullet,speed,weight,thickness
var bulletrightedge,wallleftedge
var lbullet,lwall
function setup() {
  createCanvas(1600,400)
 speed=random(223,321)
 weight=random(30,50)
 thickness=random(22,83)
 
 bullet= createSprite(50,200, 50,5);
 bullet.velocityX= speed;
 bullet.shapeColor=color(225)

wall=createSprite(1000,200,thickness,height/2)
wall.shapeColor=color(80,80,80)
}

function draw() {
  background(0);  
  if(collided(bullet,wall)){
    var damage=0.5*weight*speed/(thickness*thickness*thickness)
     if(damage>10){
       wall.shapeColor=color(255,0,0)
     }
     if(damage<10){
      wall.shapeColor=color(0,255,0)
    }
  }
  

  drawSprites();
}

function collided(lbullet,lwall){
bulletrightedge=lbullet.x+lbullet.width
wallleftedge=lwall.x

if(bulletrightedge>=wallleftedge){
  return true
}
 return false
}