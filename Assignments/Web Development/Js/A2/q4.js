var a= [1,2,3,4];
var newArray = [];
var newArray1 = [];

function mapElements(array,square){
    array.map(square);
}
function mapElements1(array,mathsqrt){
    array.map(mathsqrt);
}
function square(n){
    n = n*n;
    newArray.push(n);
}

function mathsqrt(n)
{
  n=n^0.5;
  newArray1.push(n);
}
mapElements(a,square);
mapElements1(a,mathsqrt);
console.log(newArray.join(","));
console.log(newArray1.join(","));
