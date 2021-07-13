var platform1,platform2;
var countDistanceX=0;
var gap;

function preload()
{}

function setup() {
  createCanvas(9000, 668);
 // platform1=new Platform(100);
 // platform2=new Platform(500);

 for(var i =0;i<10;i++){
  var platform1=new Platform(countDistanceX);
  gap=random([0,0,0,80]);
  countDistanceX=countDistanceX+platform1.rw+gap;
}
}

function draw() {
  background('skyblue'); 

  
 drawSprites();
}

