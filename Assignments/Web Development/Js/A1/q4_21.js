function mergeTwo(arr1, arr2) {
    let result = [...arr1, ...arr2];
    return result.sort((a,b) => a-b);
  }
  console.log(mergeTwo([1, 7, 8], [4, 5, 9]))
  