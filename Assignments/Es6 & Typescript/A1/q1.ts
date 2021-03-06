function print(str){
    "use strict";
   
    const sentence = str + " " + "how are you?";
    sentence = str + " " + " there";
      for (let i = 1; i < str.length; i += 2) {
          console.log(sentence);
          }
      }
      print("Hi");
  