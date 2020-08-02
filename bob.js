class Bob{
    constructor(bodyA, bodyB){
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 0.04,
            length: 10
        }
    }

    display(){
         var pointA = this.bob.bodyA.position;
         var pointB = this.bob.bodyB.position;
         strokeWeight(4);
         line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}