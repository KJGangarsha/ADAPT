var Fibonacci = /** @class */ (function () {
    function Fibonacci() {
    }
    Fibonacci.prototype.next = function (previousNo, currentNo) {
        console.log(previousNo + currentNo);
    };
    return Fibonacci;
}());
var f = new Fibonacci();
f.next(8, 13);
