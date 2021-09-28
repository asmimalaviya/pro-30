const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var stones=[]
var bridge
var ground

var zombie1
var zombie2
var zombie3
var zombie4
var zombie

var engine,world
var jointpoint
var jointLink
var wood
var stone
var  axe
var bg

function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);
  
  ground=new Base(0,height-10,width*2,20,"#795548",true)

  leftwall=new Base(300,heigth/2+50,600,100,"#8d6e63",true)

  rigthwall= new Base (width-300,height/2+50,600,100,"#8d6e63",true)

  bridge= new Bridge(15,{x:width /2-400, y: height/2})

  jointpoint= new Base(width-600,height/2+10,40,20,"#8d6e63",true)

 Matter.Composite.add(bridge.Body,jointpoint)
jointlink=new Link(bridge,jointpoint)

  for (var i=0;i<= 8;i++ ) {
    var x= random(width/ 2 -200 , width / 2+300 ) ;
    var y=random(-10,140) ;
    var stone = new Stone (x,y,80,80) ;
    stones.push (stone) ;
     }
     zombie=createSprite(width/2,height-110);
     zombie.addAnimation("lefttoright" ,zombie1, zombie2, zombie1);
     zombie.addAnimation("righttoright" ,zombie3, zombie4, zombie3);
     zombie.scale=0.1;
     zombie.velocityX=10;

     breakButton=createButton("");
     breakButton.position(width-200,heigth/2-50);
     breakButton.class("breakbutton");
     breakButton.mousePressed(handleButtonPress);

    // Matter.Composite.add(bridge.body,jointPoint);
//jointLink= new Link(bridge,jointPoint) ;

}

function preload(){
  zombie1=loadImage("zombie1.png")
  zombie2=loadImage("zombie2.png")
  zombie3=loadImage("zombie3.png")
  zombie4=loadImage("zombie4.png")
 wood=loadImage("wood.png")
  stone=loadImage("stone.png")
  bg=loadImage("background.png")
  axe=loadImage("axe.png")
}

function draw() {
  background(bg);
  Engine.update(engine);
  //ellipse(stones.position.x,stones.position.y,15,15)

 //emptystones ()

bridge.show()

ground.show ()

leftwall.show ()

rigthwall.show ()

for (var stone of stones  ) {
stone.show ()
}
drawSprites()
}

function handleButtonPress(){
jointlink.dettach()
setTimeout(()=> {
  bridge.break()
},1500)
}
