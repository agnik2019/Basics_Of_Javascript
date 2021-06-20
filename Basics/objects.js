const circle = {
    radius: 1,
    location :{
        x:2,
        y:-1
    },
    isVisible: true,
    draw: function(){
        console.log("draw")
    }
};
circle.draw();
//factor function
function createCircle(radius)
{
    return {
        radius, // radius : radius
        draw(){
            console.log("draw");
        },
        area(){
            console.log("Area is "+3.1416*radius*radius)
        }
    }
};
const circle1 = createCircle(3);
circle1.area();
const circle2 = createCircle(4);

//constructor function
function Circle(radius)
{
    this.radius = radius,
    this.draw = function(){
        console.log("draw")
    }
}

//Circle.apply({},[1,2,3]);
const circle3 = new Circle(7);
Circle.call({},7); //internally new Circle calls empty object and the value
circle3.draw();