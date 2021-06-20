function x(){
    var a = 7;
    function y(){
        console.log(a);
    };
    a = 100;
    return y;
}

var z = x();
console.log(z);
//.......
z();

/*
[Function: y]
100  
*/