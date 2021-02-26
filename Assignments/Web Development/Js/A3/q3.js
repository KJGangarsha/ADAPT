class rectangle{
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getArea()
    {
      console.log(this.width*this.height);
    }
    
    }
    const harsha = new rectangle(10,10);
    console.log(harsha.width)
    console.log(harsha.height)
    harsha.height=11;
    console.log(harsha.height)
    harsha.getArea()


   /* class Rectangle { 
        constructor(width,height){
          this.width=width;
          this.height=height;     
        } 
      getArea(){
        console.log(this.width*this.height);
      }
      }
      var r1 = new Rectangle(10,10)
      r1.getArea()
      r1.height=50;
    r1.getArea();
    */