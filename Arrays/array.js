//filter method
const numbers = [1,-1,2,3,-5,6,7];

const filtered = numbers.filter(n => n>=0);
console.log("Explaining filter method ["+filtered+"]");

//combined and slice method

const first=[1,2,3];
const second=[4,5,6];
const combined = first.concat(second);
const slice = combined.slice(2);
console.log(combined);
console.log(slice);



//Spread operator
const first1=[1,2,3];
const second1=[4,5,6];
const combined1 = [...first1,'a', ...second1,'b'];
//const copy = combined.slice();
const copy = [...combined1];
console.log(copy);

//map
console.log("explaining map")
const numbers1 = [1,-1,2,3,-5,6,7];
const filtered1 = numbers1.filter(n => n>=0);
const items = filtered1.map(n => ({value : n}) );
console.log(items);


//for..of 
const numbers2 = [1,-1,2,3];
let sum2=0;
 
for(let n of numbers2)
    sum2+=n;
console.log(sum2);

//you can use reduce method to clean your code
const sum1 = numbers.reduce(
    (accumulator,currentValue) => accumulator+currentValue

);
console.log(sum1);


