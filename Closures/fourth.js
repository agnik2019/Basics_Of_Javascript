// function x(){
//     var i = 1;
//     setTimeout(function(){
//         console.log(i);
//     },3000);
//     console.log("Hello..")
// }
// x();

//Question: print 1 after 1 second, print 2 after 2 second , print 3 after 3 seconds.....
// function x()
// {
//     for(var i = 1; i<=5; i++)
//     {
//         setTimeout(function(){
//             console.log(i);
//         },i*1000);
//     }
// }
// x();

// function x()
// {
//     for(let i = 1; i<=5; i++)
//     {
//         setTimeout(function(){
//             console.log(i);
//         },i*1000);
//     }
// }
// x();
function x()
{
        for(var i = 1; i<=5; i++){
        function close(i)
        {
            setTimeout(function(){
                console.log(i);
            },i*1000);
        }
       close(i);
        }
}
x();


