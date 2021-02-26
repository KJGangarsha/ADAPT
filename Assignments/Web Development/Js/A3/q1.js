class Rectangle { 
    constructor(width,height){
      this.width=width;
      this.height=height;
    }
    getwidth(){
       console.log('The width is : '+this.width);
   }
   getheight(){
      console.log('The height is : '+this.height);
   }
  }
  var r1 = new Rectangle(10,10)
  r1.getwidth();
  r1.getheight();
  var r1 = new Rectangle(11,11)
  r1.getwidth();
  r1.getheight();  