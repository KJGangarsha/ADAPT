function print(str) {
    "use strict";
    var sentence = str + " " + "how are you";
    sentence = str + " " + " how was the day";
    for (var i = 1; i < str.length; i += 2) {
        console.log(sentence);
    }
}
print("Ram");
