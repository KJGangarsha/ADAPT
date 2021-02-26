function find(arr, func) {
    while (arr[0] !== undefined) {
        if (func(arr[0]))
            return arr[0];
        return find(arr.slice(1, arr.length), func);
    }
}
console.log(find([1, 4, 2, 5], (x) => !(x % 2)));