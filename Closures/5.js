// global scope
let x = 1;

const parentFunction = () => {
    let myValue = 2;
    console.log(x);
    console.log(myValue);

    const childFunction = () => {
        console.log(x+=5);
        console.log(myValue += 1);
    }
    return childFunction;
}
 const result = parentFunction();
 console.log(result);
 result();
 result();