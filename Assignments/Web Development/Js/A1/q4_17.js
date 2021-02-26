var array = [1, 2, 3, 4, 5];
function whiletotal(arrays) {
    i = array.length,
    total = 0;

while (i--) {
    total += arrays[i]; 
}
  return total ;
}

function fortotal(arrays) {
  
  var total = 0;
  for (var i = 0; i < arrays.length; i++) {
    total += arrays[i];
  }
  return total;
}


function rectotal(arrays) {
  return arrays.reduce((total, array) => total + array, 0);
}
console.log(whiletotal(array));
console.log(fortotal(array));
console.log(rectotal(array));

