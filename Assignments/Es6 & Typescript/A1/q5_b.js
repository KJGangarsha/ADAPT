var displayFriends = function (username) {
    var arrays = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arrays[_i - 1] = arguments[_i];
    }
    console.log(username);
    for (var i in arrays) {
        console.log(arrays[i]);
    }
};
var username = "userName";
displayFriends(username, ['Harsha', 'Ammu', 'Siddiq']);
