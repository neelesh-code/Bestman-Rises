class Drops {
    constructor(x,y){
        var options = {
            isStatic: false,
            friction: 0.1
        }
        this.rain = Bodies.circle(x,y,5,options)
        World.add(world, this.rain)
        
    }


    update(){
        if(this.rain.position.y>height){
            Matter .Body.setPosition(this.rain, {x: random(0,400)}, {y: random(0,400)})
        }
    }
    display(){
        var pos = this.rain.position;
        imageMode(CENTER);
        //display the image for BestMan if the frameCount is over 200, otherwise display the boy with umbrella image
        ellipse(pos.x,pos.y,5,5);
        
    }
}
