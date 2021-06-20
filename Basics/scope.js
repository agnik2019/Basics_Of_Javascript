function userDetails(username) {
    if(username) 
    {
        console.log(salary); // undefined due to hoisting
        console.log(age); // ReferenceError: Cannot access 'age' before initializati
        let age = 30;
        var salary = 10000;
    }
    console.log(salary); //10000 (accessible to due function scope)
    console.log(age); //error: age is not defined(due to block scope)
}
userDetails('John');