function multiplier(factor){
    return (number) => number*factor;
}

// twice = multiplier(2);
// thrice = multiplier(3);
// console.log(twice(10));
// console.log(thrice(10));
console.log(multiplier(2)(3));