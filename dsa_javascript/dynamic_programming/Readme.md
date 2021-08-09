# Dynamic Programming

## Overview
- Calculate the 40th number of the fibonacci sequence.
- Count the number of different ways to move through a 6×9 grid.
- Given a set of coins, how can we make 27 cents in the least number of coins?
- Given a set of substrings, what are the possible ways to construct the string 'potentpot'


## Question 2

Say that you are a traveler on a 2D grid. You begin in the top-left corner and your goal is to travel to the bottom-right corner. You may only move down or right.

In how many ways can you travel to the goal on a grid with dimensions m * n?

Write a function gridTraveler(m, n) that calculates this.

### Bruteforce solution
```js
const gridTraveler = (m,n) => {
    if(m === 1 && n === 1) return 1;
    if(m === 0 || n === 0) return 0;
    return gridTraveler(m-1,n)+gridTraveler(m, n-1);
};
```

## Memoization

### Memoization Recipe

1. Make it work.

- visualize the problem as a tree

- implement the tree using recursion

- test it

2. Make it efficient.

- add a memo object
- add a base case to return memo values
- store return values into the memo


```js
const gridTraveler = (m,n, memo = {}) => {
    const key = m+','+n;
    if(key in memo) return memo[key];
    if(m === 1 && n === 1) return 1;
    if(m === 0 || n === 0) return 0;
    memo[key] = gridTraveler(m-1,n,memo)+gridTraveler(m, n-1, memo);
    return memo[key];
};
```


## Question 3
Write a function canSum(targetSum, numbers) that takes in a targetSum and an array of numbers as arguments.

The function should return a boolean indicating whether or not it is possible to generate the targetSum using numbers from the array.

You may use an element of the array as many times as needed. 

You may assume that all input numbers are nonnegative.

```js
const canSum = (targetSum, numbers) => {
    if(targetSum === 0) return true;
    if(targetSum < 0) return false;
    for(let num of numbers)
    {
        const remainder = targetSum - num;
        if(canSum(remainder, numbers) === true)
            return true;
    }
    return false;
}

```

### Memoization

```js
const canSum = (targetSum, numbers, memo = {}) => {
    if(targetSum in memo) return memo[targetSum];
    if(targetSum === 0) return true;
    if(targetSum < 0) return false;
    for(let num of numbers)
    {
        const remainder = targetSum - num;
        if(canSum(remainder, numbers, memo) === true){
            memo[targetSum] = true;
            return true;
        }
    }
    memo[targetSum] = false;
    return false;
}
```