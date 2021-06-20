const button = document.querySelector('button');
const disp = document.getElementById('display');
var count = 0;

function toggle(){
    count++;
    button.classList.toggle('altColor')
    disp.innerHTML = count;
}
//toggle();  ---> not a callback function

button.addEventListener('click',toggle);


// callback
// function firstAction(){
//     console.log("I am the first action");
//     setTimeout(secondAction, 2000);
// }
// function secondAction(){
//     console.log("I am the second action");
// }
// setTimeout(firstAction,5000);





// function firstAction(callback){
//     console.log("I am the first action");
//     setTimeout(callback, 2000);
// }
// function secondAction(){
//     console.log("I am the second action");
// }
// setTimeout(firstAction(secondAction),5000);
//This is not a callback






// To make this callback
// function firstAction(callback){
//     console.log("I am the first action");
//     setTimeout(callback, 2000);
// }
// function secondAction(){
//     console.log("I am the second action");
// }
// setTimeout(()=>firstAction(secondAction),5000);





function firstAction(callback){
    console.log("I am the first action");
    setTimeout(callback, 2000);
}
function secondAction(message){
    console.log(message);
}
setTimeout(()=>firstAction(()=>secondAction("I am the second action")),5000);