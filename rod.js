class Rod{
    constructor(bodyA, bodyB){
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 0.04,
            length: 10
        }
    }

    display(){
         var pointA = this.rod.bodyA.position;
         var pointB = this.rod.bodyB.position;
         strokeWeight(4);
         line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}