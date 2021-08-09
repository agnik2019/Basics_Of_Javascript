/* 
You've written the code shown to log a set of consecutive values, but it instead results in the
 value 5, 5, 5, and 5 being logged to the console. Which revised version of the code would result 
 in the value 1, 2, 3 and 4 being logged?

*/


for (var i = 1; i <= 4; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 100);
  }


  for (var i = 1; i <= 4; i++) {
    (function (j) {
      setTimeout(function () {
        console.log(j);
      }, j * 100);
    })(i);
  }