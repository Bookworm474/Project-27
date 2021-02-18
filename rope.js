class Rope{
    constructor(bodyA,bodyB,offsetX,offsetY){
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        var options = {
            bodyA: bodyA,
            bodyB: bodyB
        }
        
        this.rope = Constraint.create(options);
        World.add(world,this.rope);
    }
    display(){
        var pointA = this.rope.bodyA.position;
        var pointB = {x:this.rope.bodyB.position.x-this.offsetX, y:this.rope.bodyB.position.y-this.offsetY};
        strokeWeight(3);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}