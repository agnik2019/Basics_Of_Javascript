//  Slice method won't mutate the original array but it returns the subset as a new
// array
// let arrayIntegers = [1, 2, 3, 4, 5];
// let arrayIntegers1 = arrayIntegers.slice(0,2); // returns [1,2]
// let arrayIntegers2 = arrayIntegers.slice(2,3); // returns [3]
// let arrayIntegers3 = arrayIntegers.slice(4); //returns [5]

// Splice method modifies the original array and returns the deleted array
let arrayIntegersOriginal1 = [1, 2, 3, 4, 5];
let arrayIntegersOriginal2 = [1, 2, 3, 4, 5];
let arrayIntegersOriginal3 = [1, 2, 3, 4, 5];
let arrayIntegers1 = arrayIntegersOriginal1.splice(0,2); // returns [1, 2]; 
let arrayIntegers2 = arrayIntegersOriginal2.splice(3); // returns [4, 5]; 
let arrayIntegers3 = arrayIntegersOriginal3.splice(3, 1, "a", "b", "c");

for(let x in arrayIntegers1)
    console.log(x);

