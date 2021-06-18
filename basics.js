// hoisting in javascript
// getName();
// console.log(x);
// var x = 7;
// function getName() {
//  console.log("Namaste Javascript");
// }

var x = 1;
a();
b();
console.log(x);
function a() {
 var x = 10;
 console.log(x);
}
function b() {
 var x = 100;
 console.log(x);
}
/* 
output:
10
100
1
*/
