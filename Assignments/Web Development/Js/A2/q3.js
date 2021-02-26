let a = [1,3,5,4,2];
function check(array,isEven){
    isEven(array);
}
function isEven1(a)
{
  if(a%2==0){console.log("true")}
  else{console.log("False")}
}
 function isEven(a){
   for( var i=0;i<a.length;i++){
     if(a[i]%2==0){console.log(a[i]);
                  break;}
   }
}
isEven1(5);
isEven1(4);
check(a,isEven)