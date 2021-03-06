function arrayToObject(str, length) {
    var length;
    for (var i = 0; i < str.length; ++i) {
        length[i] = str[i].length;
    }
    return length;
}
var str = ["Tom", "Ivan", "Jerry"];
console.log(arrayToObject(["Tom", "Ivan", "Jerry"], length));
