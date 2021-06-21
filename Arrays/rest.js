//console.log(sum(1,2,3,4,6));
console.log(sum("Agnik",99,89,45,99))

// function sum(){
//     let sum = 0;
//     console.log(typeof(arguments)) // Object
//     console.log(arguments);
//     for(let i in arguments)
//         sum+= arguments[i];
//     return sum;
// }

function sum(name, ...args){
    console.log(`Hi, ${name}`);
    let s = 0;
    for(let i in args)
        s= s+ args[i];
    return s;
}