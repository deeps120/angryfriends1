class Box{
    constructor(x,y,width,height){
       
        var options={
            restitution:2.0,
            friction:1.0,
            density:1.0
        }
        this.visiblity=255;
        this.body=Bodies.rectangle(x,y,width,height);
        this.boxImage=loadImage("setup.jpg");
        World.add(world,this.body);
        this.width=width;
        this.height=height;
    }
    display(){
    
            var pos=this.body.position;
        image(this.boxImage,pos.x,pos.y,this.width,this.height);
        fill("aqua");
    }
    
}