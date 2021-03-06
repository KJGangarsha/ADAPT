var Circle = /** @class */ (function () {
    function Circle() {
    }
    Circle.prototype.printAll = function (Object) {
        console.log('Priniting the Circle' + Object);
    };
    return Circle;
}());
var Employee = /** @class */ (function () {
    function Employee() {
    }
    Employee.prototype.printAll = function (Object) {
        console.log('Employee: ' + Object);
    };
    return Employee;
}());
var e = new Employee();
e.printAll('Tommy');
