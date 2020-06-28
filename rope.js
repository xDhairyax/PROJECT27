class Rope {
    constructor(bodyA,bodyB,offsetX,offsetY)
    {this.offsetX=offsetX;
        this.offsetY=offsetY;
        var options={
            bodyA:bodyA,
            bodyB:bodyB,
            pointB:{x:this.offsetX,y:this.offsetY}
           // stiffness:0.8,
            //length:100
        }
        this.rope=Constraint.create(options);
        World.add(world,this.rope);
    }
    display(){
        var pointA=this.rope.bodyA.position;
        var pointB=this.rope.bodyB.position;
        strokeWeight(4);
        stroke("black")
        var pb=pointB.x+this.offsetX;
        var pb1=pointB.y+this.offsetY;
        line(pointA.x,pointA.y,pb,pb1);
    }
}