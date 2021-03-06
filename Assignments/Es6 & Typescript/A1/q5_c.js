var displayColors = function () {
    var colours = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        colours[_i] = arguments[_i];
    }
    for (var i in colours) {
        console.log(colours[i].toUpperCase());
    }
};
var colourArray = ['Harsha', 'Ammu', 'Siddiq', 'kanth'];
displayColors.apply(void 0, colourArray);
