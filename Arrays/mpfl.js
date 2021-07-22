const data = [
  { "firstname":"Agnik ", "lastname":"Saha","age":23 },
  { "firstname":"Donald ", "lastname":"Trump","age":65 },
  { "firstname":"Alia ", "lastname":"Bhatt","age":23 },
  { "firstname":"Deb ", "lastname":"Saha","age":24 },
];


const output1 = data.map( x => x.firstname+x.lastname);
console.log(output1);

const output2 = data.filter( x=> x.age>50 );
console.log(output2);

// Reduce
let arr = [1,2,3,45,6,43];
const output3 = arr.reduce(function(acc, curr){
    acc = acc+curr;
    return acc;
},0)
console.log(output3);

// Finding max using reduce method
let arr2 = [1,2,3,45,6,43];
const output4 = arr2.reduce(function(acc, curr){
    if(curr>acc)  acc= curr;
    return acc;
},0)
console.log(output4);

// Finding min using reduce method
const output5 = arr2.reduce(function(acc, curr){
    if(curr<acc)  acc= curr;
    return acc;
},arr2[0]);
console.log(output5);