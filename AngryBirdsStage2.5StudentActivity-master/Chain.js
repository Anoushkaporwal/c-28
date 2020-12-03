class Chain {
   constructor(bodyA,bodyB){
    var options={
        bodyA:bodyA,
        bodyB:bodyB,
        stiffness:0.4,
        length:5
    }
    this.chain = Constraint.create(options);
    World.add(world,this.chain);
   }
   display(){
       var BodyA = this.chain.bodyA.position;
       var BodyB = this.chain.bodyB.position;

    strokeWeight(5);
    line(BodyA.x,BodyA.y,BodyB.x,BodyB.y)
   }
}