class launcher {
    constructor(bodyA, anchor){
        var options ={
            bodyA: bodyA,
            pointB: anchor,
            stiffness: 0.004,

            length:1
        }
        this.bodyA=bodyA;
        this.pointB = anchor;
        this.launcher = Constraint.create(options);
        World.add(world, this.launcher)
    }

    fly(){
        this.launcher.bodyA = null
    }
    attach(body){
        this.launcher.bodyA = body;
    }

    display(){
        if(this.launcher.bodyA){ 
            var pointA = this.bodyA.position; 
            var pointB = this.pointB; 
            strokeWeight(4); 
            line(pointA.x, pointA.y, pointB.x, pointB.y); 
        } 
    }
}