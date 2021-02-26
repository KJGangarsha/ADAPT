String.prototype.repeat = String.prototype.repeat || function(n){
    n= n || 1;
    return Array(n+1).join(this);
  }
for(var i=0;i<3;i++)
  {
   const x = prompt('Enter a number(1-30): ');
    if(x<=30){
  console.log('x'.repeat(x) );}
  }