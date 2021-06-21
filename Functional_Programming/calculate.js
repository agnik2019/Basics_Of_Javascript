// write a function to calculate area, circumference, diameter of radius
const radius = [3,4,5,6];
// area
const calculateArea = (radius) =>
{
    let output = [];
    for(let i = 0; i< radius.length; i++)
    {
        output.push(Math.PI * radius[i] *radius[i]);
    }
    return output;
}
console.log(calculateArea(radius));

// Circumference
const calculateCircum = (radius) =>
{
    let output = [];
    for(let i = 0; i< radius.length; i++)
    {
        output.push(Math.PI * radius[i] *2);
    }
    return output;
}
console.log(calculateCircum(radius));

// diameter
const calculateDiameter = (radius) =>
{
    let output = [];
    for(let i = 0; i< radius.length; i++)
    {
        output.push( radius[i] *2);
    }
    return output;
}
console.log(calculateDiameter(radius));




/*  
Output:
[
  28.274333882308138,
  50.26548245743669,
  78.53981633974483,
  113.09733552923255
]
[
  18.84955592153876,
  25.132741228718345,
  31.41592653589793,
  37.69911184307752
]
[ 6, 8, 10, 12 ]
*/