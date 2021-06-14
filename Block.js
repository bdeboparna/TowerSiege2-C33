class Block{
  constructor(x, y, width, height) {
    var options = {
      restitution : 0.4,
      friction : 1
    }

    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.visibility = 50;
    World.add(world, this.body);
  }

  display(){
    var angle = this.body.angle;
    var pos= this.body.position;

    if(this.body.speed<5){
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    rect(0,0,this.w, this.h);
    pop();
    }

    else{
      World.remove(world,this.body);
    }
  }
}