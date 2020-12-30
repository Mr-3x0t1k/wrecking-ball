class rope
{
   constructor(bodyA, pointB)
   {
   var options ={
   bodyA : bodyA,
   pointB : pointB,
   stiffness : 0.8,
   length : 200

   }
    this.bodyA = bodyA;
    this.pointB = pointB;
    this.rope = Constraint.create(options);
    World.add(world, this.rope);
   }
    display()
    {
    var pointA = this.rope.bodyA.position;
    var pointB = this.pointB;
    push();
    strokeWeight(5);
    stroke(101, 67, 33);
    line(pointA.x, pointA.y, pointB.x, pointB.y);

    pop();
    }

}