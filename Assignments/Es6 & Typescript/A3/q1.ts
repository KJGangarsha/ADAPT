import { promises } from "fs"

 
 function showX(x){
     
    return new Promise((resolve)=>{
        resolve("the value of x is: "+x)
    })
}
 function showY(y){
    return new Promise((resolve)=>{
        resolve("the value of y is: "+y)
    })
}
var showSum = function sum(x,y){
    return new Promise((resolve,reject)=>{
        const add1 =  parseInt(x);
        const add2 = parseInt(y);
        resolve('The sum is : '+add1+add2);
    })
}
function doWork(){
    const numberInX = parseInt(4);
    const numberInY= parseInt(4);
   Promise.all(
   [
     showX(numberInX),
     showY(numberInY),
      showSum(numberInX,numberInY)
   ]).then((message)=>{
       console.log(message)
   })
}
doWork()