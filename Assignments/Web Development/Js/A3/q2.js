class Rectangle { 
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
  var r1 = new Rectangle(11,11)
  r1.getArea()