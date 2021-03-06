function getNextArmstrong(n) {
    n = parseInt(n);
    if (n > 1000) {
        n = 0;
    }
    while (n < 1000) {
        var digits = n.toString().length;
        var x = n;
        var num = 0;
        while (x > 0) {
            var r = x % 10;
            num = num + Math.pow(r, digits);
            x = (x / 10);
        }
        if (num === n)
            return n;
        n++;
    }
    return;
}
console.log(getNextArmstrong(153));
