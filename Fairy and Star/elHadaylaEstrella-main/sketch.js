var starImg,bgImg;
var star, starBody;
var fairyImg;


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png")
}
function setup() {
	createCanvas(800, 750);

	fairy = createSprite(400,375,20,20);
    fairy.addAnimation("fairy",fairyImg);
	fairy.scale = 0.2



	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

  if (keyDown(DOWN_ARROW)) {
	Matter.Body.setStatic(starBody,false); 
}
  if (keyDown(LEFT_ARROW)) {
	fairy.x = fairy.x-20 
}
  if (keyDown(RIGHT_ARROW)) {
	fairy.x = fairy.x+20 
}
  if (fairy.y-20<=star.y){
	Matter.Body.setStatic(starBody,true); 
}

  //escribe aquí el código para detener la estrella en la mano del hada

  drawSprites();

}
