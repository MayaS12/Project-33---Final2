var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];

var gameState = "play";

var ground;
var particle;
var turn = 0;

var divisionHeight=300;
var score = 0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

}
 


function draw() {
  background("black");
  textSize(20)
 text("Score : "+score,20,30);

 text("500",25,750);
 text("500",105,750);
 text("500",185,750);
 text("500",265,750);
 text("100",345,750);
 text("100",425,750);
 text("100",505,750);
 text("200",585,750);
 text("200",665,750);
 text("200",745,750);

if(particle != null){
  particle.display();

 if(particle.body.position.y>760){

    if(particle.body.position.x<300){
      score = score+500;
      console.log(score);
      particle = null;
      if(turn>=5) 
      {gameState = "end";
      console.log("500")};
    }
  

  else if(particle.body.position.x>301 && particle.body.position.x<600){
    score = score+100;
    console.log(score)
    particle = null;
    if(turn>=5) {gameState = "end"};
  }

  else if(particle.body.position.x>601 && particle.body.position.x<800){
    score = score+200;
    console.log(score);
    particle = null;
    if(turn>=5) {gameState = "end"};
  }
}
}

if(gameState === "end"){
  text("Game Over!",300,30)
}

  Engine.update(engine);
 
 ground.display();
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
}

function mousePressed(){
  if(gameState != "end"){
    turn++
    particle = new Particle(mouseX,10,10,10);
  }
}