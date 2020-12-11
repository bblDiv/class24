const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1600,600);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,300,50,50);
    box2 = new Box(240,100,50,50);
    box3 = new Box(800,400,50,50);
    box4 = new Box(1000,600,50,50);
    box5 = new Box(1200,200,50,50);
    bird = new Bird(100,100);
    pig1 = new Pig(600,600);
    pig2 = new Pig(600,900);
    log1 = new Log(810,200,300, -PI/2);
    log2 = new Log(810,400,300, PI/2);
    log3 = new Log(810,680,300, PI/7);
    
    ground = new Ground(400,height,1600,10);
    
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    bird.display();
    pig2.display();
    pig1.display();
    log1.display();
    log2.display();
    log3.display();
    ground.display();
}