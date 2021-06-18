//globalThis.setTimeout(()=> console.log('hello'),100)
//window.setTimeout(()=> console.log('hello'),100)

// Optional Chaining

// const language = {
//     name:'Javascript',
//     creator:'Brendan Eich',
//     library:{
//         react:{
//             company:'Facebook'
//         }
//     }
// };
// let company = language?.library?.react?.company;
// console.log(company);


// let colors = ['red','green','blue'];
// colors = null;
// console.log(colors?.[1]);

// Nullish coalescing Operator
let language;
console.log(language ?? 'Javascript')