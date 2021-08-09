const howSum = (targetSum, numbers, memo = {}) => {
    if(targetSum in memo) return memo[targetSum];
    if(targetSum === 0) return [];
    if(targetSum < 0) return null;
    for(let num of numbers)
    {
        const remainder = targetSum - num;
        const remainderRes = howSum(remainder, numbers);
        if(remainderRes !== null){
            memo[targetSum]= [...remainderRes, num];
            return memo[targetSum];
        }
    }
    memo[targetSum] = null;
    return null;
}

console.log(howSum(7,[5,3,4,7]));
console.log(howSum(8,[2,3,5]));
console.log(howSum(7,[2,4]));
console.log(howSum(189,[2,4]));
console.log(howSum(0,[1,2,3]));
