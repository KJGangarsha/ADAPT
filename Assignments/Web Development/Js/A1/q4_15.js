const cumulativeSum = (sum => value => sum += value)(0);

console.log([5, 10, 3, 2].map(cumulativeSum));