class wreckingBall
{
constructor(x, y, r)
        {
        var options =
        {
        isStatic : false,
        density : 0.5,
        friction : 0.1,
        restitution : 0.1

        }
        this.body = Bodies.rectangle(x,y,50,50,options);

        this.x = x;
        this.y = y;



        World.add(world, this.body);

        }
        display()
        {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        fill (255,255,255);
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        ellipse(0, 0, 50, 50);
        pop();

        }






}