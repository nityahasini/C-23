class Box {
  // to define the properties of the object i.e box
  constructor(x, y, width, height) {
    var box_options = {
      'restitution':0.8,
       'friction':0.3,
       'density':1.0
      }
    this.body = Bodies.rectangle(x, y, width, height, box_options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
  }

  display(){
    var pos =this.body.position;
    var angle = this.body.angle; 
    push();// captures a new setting
    translate(pos.x,pos.y); // to change the 0 of the axis to given x and y positions
    rotate(angle);
    rectMode(CENTER);
    fill("black");
    rect(0,0, this.width, this.height);
    pop(); // reverts to the old settings
  }
}
