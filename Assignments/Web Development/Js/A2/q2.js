const compose = (a, b) => (data) => a(b(data))

const square = (num) => {
return num * num
}

const double = (num) => {
return num * 2
}

var f1=compose(square,double);
var f2=compose(double,square);
console.log(f1(5));
console.log(f1(10));
console.log(f2(5));
console.log(f2(10));