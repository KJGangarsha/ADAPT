var p1 = new Promise(function (resolve, reject) {
    var x = 5;
    resolve(x);
});
var p2 = new Promise(function (resolve, reject) {
    var y = 3;
    resolve(y);
});
var p3 = new Promise(function (resolve, reject) {
    var v = x + y;
    resolve(v);
});
Promise.all([p1, p2, p3]).then(function (values) {
    console.log(values);
});
