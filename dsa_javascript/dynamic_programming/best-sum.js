const bestSum = (target, numbers) => {
    if(target === 0) return [];
    if(target < 0) return null;
    let shortest = null;
    for(let num of numbers)
    {
        let remainder = target - num;
        const remComb = bestSum(remainder, numbers);
        if(remComb !== null){
            const comb = [...remComb, num];
            if(shortest === null || comb.length < shortest.length)
            {
                shortest = comb;
            }
        }
    }
    return shortest
}

console.log(bestSum(7,[5,3,4,7]));
console.log(bestSum(8,[2,5,3]));