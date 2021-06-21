const radius = [3,4,5,6];
// area
const area = function(radius){
    return Math.PI*radius*radius
};

const diameter = function(radius){
    return 2*radius;
};
const circum = (radius) => {return 2*Math.PI*radius;}
const calculateArea = (radius,logic) =>
{
    let output = [];
    for(let i = 0; i< radius.length; i++)
    {
        output.push(logic(radius[i]));
    }
    return output;
}
console.log(calculateArea(radius,area));
console.log(calculateArea(radius,circum));
console.log(calculateArea(radius,diameter));
