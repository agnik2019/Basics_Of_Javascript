
//Explaining hoisting and arguments of functions
console.log(sum(1,2,4,5,8,9,11));

function sum()
{
    console.log(arguments);
    let total =0;
    for(let value of arguments)
        total += value;
    return total;
}
 //console.log(sum(1,2,4,5,8,9,11));


function sum1(discount, ...prices){
    const total = prices.reduce((a,b) =>a+b);
    return total*(1-discount);
}
console.log(sum1(0.1,20,30,1));



function sum2(...args){
    let total=0;
    return args.reduce((a,b) => a+b);
}
console.log(sum2(1,2,3,5,10));



// //method -> obj
// // function -> global(window,global)


// const video = {
//     title : 'a', 
//     play(){
//         console.log(this);
//     }
// };

// function video2(title)
// {
//     this.title= title;
//     console.log(this);
// }
// const v= new video2('b');  //local object




// video.stop = function(){
//     console.log(this);
// };  

// video.stop();  //window object

// video.play();


// function playvideo(){
//     console.log(this);
// }
// playvideo();  //window object


// const video = {
//     title: 'a',
//     tags:['a','b','c','d'],
//     showTags(){
//         this.tags.forEach(function(tag){
//             console.log(this,tag);
//         });
//     }
// };
// video.showTags();
 
// function playVideo(){
//     console.log(this);
// }
// playVideo.call({name: "Agnik"},1,2);


// const video = {
//     title: 'a',
//     tags:['a','b','c','d'],
//     showTags(){
//         this.tags.forEach(tag => {
//             console.log(this.title,tag);
//         });
//     }
// };
// video.showTags();

