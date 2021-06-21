
const radius = [1,2,3,4];
const area = (radius) => {
    return Math.PI * radius*radius;
}
console.log(radius.map(area));


Array.prototype.calculate = function(logic){
    let output = [];
    for(let i = 0; i< this.length; i++){
        output.push(logic(this[i]));
    }
    return output;
}
console.log(radius.calculate(area));