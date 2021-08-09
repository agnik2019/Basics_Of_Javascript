var arr = [31,28,31,30,31,30,31,31,30,31,30,31];
arr[1000] = 22;
console.log(arr.length) // 1001

console.log(23+undefined) // NaN

// array sorts element alphabetically
var arr2 = [-2, 8,22,10,-5];
arr2.sort(function(a,b){return a-b});
console.log(arr2)
