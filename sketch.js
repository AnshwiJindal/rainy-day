const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var drops = [];
var rand;

var maxDrops=100;


function setup(){
  createCanvas(1200,550)
    engine = Engine.create();
    world = engine.world;

    
   

    //creating drops
    if(frameCount % 150 === 0){

        for(var i=0; i<maxDrops; i++){
            drops.push(new createDrop(random(0,1200), random(0,1200)));
        }

    }
    
}

function draw(){
    Engine.update(engine);
    background(0); 

    
    for(var i = 0; i<maxDrops; i++){
        drops[i].showDrop();
        drops[i].updateY()
        
    }

    drawSprites();
}   

