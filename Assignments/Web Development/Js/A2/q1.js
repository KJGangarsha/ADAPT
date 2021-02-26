const composedValue = (a, b, data) => a(b(data))

const square = (num) => {
return num * num
}

const double = (num) => {
return num * 2
}

console.log(composedValue (square, double, 5));