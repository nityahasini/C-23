const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2;
var box3,box4;
var ground ; 

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(100,10,50,50);
    box2= new Box(109,30,60,60);

    box3 = new Box(300,10,40,45);
    box4= new Box(290,30,40,35);

ground= new Ground(200,390,400,20);
}

function draw(){
    background("lightblue");
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
   ground.display();
   
}