# JAVASCRIPT BASICS
### How execution context and program stack works
- Eveything in js hapens inside execution context.
- Execution context consist of :
  - **Variable environment** : Stores functions and variable in key value pair
  - **Code component**  : Code is executed synchronously 
- It is synchronous single threaded language.

### Phases in global execution context.
- When JS runs global execution context is created .
- Execution context is created in 2 phases
  - Creation/Memory creation phase
  - Code execution phase
- Initially undefined is allocated to all variables in phase 1
- In code execution phase actual value is allocated.
- When a function is invoked a brand new execution context is created for the function.
- local execution context is deleted after a function completes.
- **Call stack** : For managing all exectution context
  - Global execution context is at the pushed first.
  - It also maintains the order of execution context 
  - More fancy names
    - Execution context stack 
    - Program stack
    - Control stack
    - Runtime stack
    - Machine stack
  
### Hoisting in JS
- In memory creation phase variables are set to undefined and for functions whole code is present.
- Arrow functions behave like variables for execution context i.e undefined is set for them in phase 1.
- Global execution context is the anonymous context that is pushed first in program stack.
```js
getName();
console.log(x);
var x = 7;
function getName() {
 console.log("Namaste Javascript");
}
```
**Output**
```
Namaste Javascript
undefined
```
It should have been an outright error in many other languages, as it is not possible to even access something which is not even created (defined) yet.
However, JS executed the function and printed undefined ([[#Code Execution]]: point 4) for the variable. We know that in memory creation phase it assigns undefined and puts the content of function to function's memory. And in execution, it then executes whatever is asked. Here, as execution goes line by line and not after compiling, it could only print undefined and nothing else.
Above phenomenon, is not an error. However, if you remove var x = 7; then it gives error. Uncaught ReferenceError: x is not defined
console.log(getName); prints the content of the function.
Hoist in English means a tool for lifting or lowering the load.
If getName is declared as an arrow function 
```js
(var getName = () => {...})
```
 or like this,

```js
    var getName = function () {
    ...
    }
```
then it is just like any other variable. Hence, when we print getName to console, it prints undefined instead of its content, and when we try getName(); it gives error as it is not a function.

```js
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
```
**Explanation:**
- GEC is created. memory assigned to x: undefined and a: points to function code, b: points to function code.
- Execution of GEC begins, at line 1 x: 1. At line a(), local execution context is created, x: undefined. Execution starts for local execution context, x: 10, 10 is printed on console. Local execution context is popped from call stack. Control goes to GEC.
- Same process is repeated for b(). 100 is printed on console.
- Control goes back to GEC. 1 is printed on console. GEC is popped.
### Shortest JS

- The shortest JS program is empty file. Because even then, JS engine does a lot of things. As always, even in this case, it creates the GEC  which has memory space and the execution context.
- JS engine creates something known as 'window'. It is an object, which is created in the global space. It contains lots of functions and variables.
- These functions and variables can be accessed from anywhere in the program. JS engine also creates a this keyword, which points to the window object at the global level.
- So, in summary, along with GEC, a global object (window) and a this variable are created.
- In different engines, the name of global object changes. Window in browsers, but in nodeJS it is called something else. At global level, this === window
- At global level, this points to window object.
- There is always global object
  - For browsers it is window
  - For NodeJS it is _ _ _ ?
- Any var or function created in gloabal space are attached to window object.
- window.a === this.a === a


### Lexical environment
- local memory + lexical env of parent .
- JS travers through scope chain to find the variable in lexical scope of itself and parent .

###  let, const , temporal dead zone
- let and const are hoisted in seperate scope called script scope.
- You can access var variables before initilization because of hoisting. (In global execution stack it's value is set to undefined).
- let/ const cannot be accessed before they are intilized .
- Temportal deadzone : let/ const variables are set to undefined in phase 1 but you cannot access/use them before           intilization. the time period between declcaring and intilization is called temporal dead zone.
- You cannot access let/const through window object, they are in seperate scope and space. Same goes for this.

##  Closures
- function bind together with it's lexical scope.
- Example: when function are returned from another function, they remember the varibles they will use. See notes for more.
- Disadvantage : Lot of memeory is consumed.

- **Uses Of Closure**
  - Module Design Pattern
  - Currying
  - Functions like once
  - memoize
  - maintaining state in async world
  - setTimeouts
  - Iterators
  - and many more..

```js
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
```
```
Output:
[Function: y]
100  
```

Special cases of closure:
```js
function x()
{
    for(var i = 1; i<=5; i++)
    {
        setTimeout(function(){
            console.log(i);
        },i*1000);
    }
}
x();
```
```
Output: 6
6
6
6
6
```
It is printing 6 because time , tide and javascript wait for none. If we use var as type it is first complete loop over the for loop then it will start printing.
But it we use let instead of var it will print our desired output.
Because Let is block scoped. In each iteration it will reference new x variable.

Now if you dont want to use let, then use closure for creating new scope for variable.
```js
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
```


### Callbacks
Look at the common code
```js
  function toggle(){
    button.classList.toggle('altColor')
}
  button.addEventListener('click',toggle)
```
Here togle is a callback function.

But
```toggle()``` is not a callback function. It is called function.
```js
  function firstAction(callback){
      console.log("I am the first action");
      setTimeout(callback, 2000);
  }
  function secondAction(message){
      console.log(message);
  }
  setTimeout(()=>firstAction(()=>secondAction("I am the second action")),5000);
```


###  Event loop
- Call stack is present inside JS engine
- There are web API's which browser provides us, some of them are - setTimeout, fetch etc
- These web API's can be accessed by call stack, therefore we are able to use these in our JS code.
- Jon of event loop is to monitor call stack, if call stack is found empty, it'll check the callback queue and will push any cb in call stack.

### JS runtime environment
- Every browser has JS runtime env/engine.
- NodeJS has it's own JS runtime env/engine.

# Some Important Questions
1. ### What are the possible ways to create objects in JavaScript

   There are many ways to create objects in javascript as below

   1. **Object constructor:**

      The simplest way to create an empty object is using the Object constructor. Currently this approach is not recommended.

      ```javascript
      var object = new Object();
      ```

   2. **Object's create method:**

      The create method of Object creates a new object by passing the prototype object as a parameter

      ```javascript
      var object = Object.create(null);
      ```

   3. **Object literal syntax:**

      The object literal syntax is equivalent to create method when it passes null as parameter

      ```javascript
      var object = {};
      ```

   4. **Function constructor:**

      Create any function and apply the new operator to create object instances,

      ```javascript
      function Person(name){
         var object = {};
         object.name=name;
         object.age=21;
         return object;
      }
      var object = new Person("Sudheer");
      ```

   5. **Function constructor with prototype:**

      This is similar to function constructor but it uses prototype for their properties and methods,

      ```javascript
      function Person(){}
      Person.prototype.name = "Sudheer";
      var object = new Person();
      ```

      This is equivalent to an instance created with an object create method with a function prototype and then call that function with an instance and parameters as arguments.

      ```javascript
      function func {};

      new func(x, y, z);
      ```

      **(OR)**

      ```javascript
      // Create a new instance using function prototype.
      var newInstance = Object.create(func.prototype)

      // Call the function
      var result = func.call(newInstance, x, y, z),

      // If the result is a non-null object then use it otherwise just use the new instance.
      console.log(result && typeof result === 'object' ? result : newInstance);
      ```

   6. **ES6 Class syntax:**

      ES6 introduces class feature to create the objects

      ```javascript
      class Person {
         constructor(name) {
            this.name = name;
         }
      }

      var object = new Person("Sudheer");
      ```

   7. **Singleton pattern:**

      A Singleton is an object which can only be instantiated one time. Repeated calls to its constructor return the same instance and this way one can ensure that they don't accidentally create multiple instances.

      ```javascript
      var object = new function(){
         this.name = "Sudheer";
      }
      ```

  

2. ### What is a prototype chain

    **Prototype chaining** is used to build new types of objects based on existing ones. It is similar to inheritance in a class based language. 
    
    The prototype on object instance is available through **Object.getPrototypeOf(object)** or **__proto__** property whereas prototype on constructors function is available through **Object.prototype**.




3. ### What is the difference between Call, Apply and Bind

    The difference between Call, Apply and Bind can be explained with below examples,

    **Call:** The call() method invokes a function with a given `this` value and arguments provided one by one

    ```javascript
    var employee1 = {firstName: 'John', lastName: 'Rodson'};
    var employee2 = {firstName: 'Jimmy', lastName: 'Baily'};

    function invite(greeting1, greeting2) {
        console.log(greeting1 + ' ' + this.firstName + ' ' + this.lastName+ ', '+ greeting2);
    }

    invite.call(employee1, 'Hello', 'How are you?'); // Hello John Rodson, How are you?
    invite.call(employee2, 'Hello', 'How are you?'); // Hello Jimmy Baily, How are you?
    ```

    **Apply:** Invokes the function with a given `this` value and allows you to pass in arguments as an array

    ```javascript
    var employee1 = {firstName: 'John', lastName: 'Rodson'};
    var employee2 = {firstName: 'Jimmy', lastName: 'Baily'};

    function invite(greeting1, greeting2) {
        console.log(greeting1 + ' ' + this.firstName + ' ' + this.lastName+ ', '+ greeting2);
    }

    invite.apply(employee1, ['Hello', 'How are you?']); // Hello John Rodson, How are you?
    invite.apply(employee2, ['Hello', 'How are you?']); // Hello Jimmy Baily, How are you?
    ```

    **bind:** returns a new function, allowing you to pass any number of arguments

    ```javascript
    var employee1 = {firstName: 'John', lastName: 'Rodson'};
    var employee2 = {firstName: 'Jimmy', lastName: 'Baily'};

    function invite(greeting1, greeting2) {
        console.log(greeting1 + ' ' + this.firstName + ' ' + this.lastName+ ', '+ greeting2);
    }

    var inviteEmployee1 = invite.bind(employee1);
    var inviteEmployee2 = invite.bind(employee2);
    inviteEmployee1('Hello', 'How are you?'); // Hello John Rodson, How are you?
    inviteEmployee2('Hello', 'How are you?'); // Hello Jimmy Baily, How are you?
    ```

    Call and apply are pretty interchangeable. Both execute the current function immediately. You need to decide whether it’s easier to send in an array or a comma separated list of arguments. You can remember by treating Call is for **comma** (separated list) and Apply is for **Array**. 
    
    Whereas Bind creates a new function that will have `this` set to the first parameter passed to bind().



4. ### What is JSON and its common operations

    **JSON** is a text-based data format following JavaScript object syntax, which was popularized by `Douglas Crockford`. It is useful when you want to transmit data across a network and it is basically just a text file with an extension of .json, and a MIME type of application/json
    
    **Parsing:** Converting a string to a native object

    ```javascript
    JSON.parse(text)
    ```

    **Stringification:** converting a native object to a string so it can be transmitted across the network

    ```javascript
    JSON.stringify(object)
    ```



5. ### What is the purpose of the array slice method

    The **slice()** method returns the selected elements in an array as a new array object. It selects the elements starting at the given start argument, and ends at the given optional end argument without including the last element. If you omit the second argument then it selects till the end.
    
    Some of the examples of this method are,

    ```javascript
    let arrayIntegers = [1, 2, 3, 4, 5];
    let arrayIntegers1 = arrayIntegers.slice(0,2); // returns [1,2]
    let arrayIntegers2 = arrayIntegers.slice(2,3); // returns [3]
    let arrayIntegers3 = arrayIntegers.slice(4); //returns [5]
    ```

    **Note:** Slice method won't mutate the original array but it returns the subset as a new array.



6. ### What is the purpose of the array splice method

    The **splice()** method is used either adds/removes items to/from an array, and then returns the removed item. The first argument specifies the array position for insertion or deletion whereas the optional second argument indicates the number of elements to be deleted. Each additional argument is added to the array. 
    
    Some of the examples of this method are,

    ```javascript
    let arrayIntegersOriginal1 = [1, 2, 3, 4, 5];
    let arrayIntegersOriginal2 = [1, 2, 3, 4, 5];
    let arrayIntegersOriginal3 = [1, 2, 3, 4, 5];

    let arrayIntegers1 = arrayIntegersOriginal1.splice(0,2); // returns [1, 2]; original array: [3, 4, 5]
    let arrayIntegers2 = arrayIntegersOriginal2.splice(3); // returns [4, 5]; original array: [1, 2, 3]
    let arrayIntegers3 = arrayIntegersOriginal3.splice(3, 1, "a", "b", "c"); //returns [4]; original array: [1, 2, 3, "a", "b", "c", 5]
    ```

    **Note:** Splice method modifies the original array and returns the deleted array.



7. ### What is the difference between slice and splice

    Some of the major difference in a tabular form

    | Slice | Splice |
    |---- | ---------
    | Doesn't modify the original array(immutable)  | Modifies the original array(mutable) |
    | Returns the subset of original array | Returns the deleted elements as array  |
    | Used to pick the elements from array | Used to insert or delete elements to/from array|



8. ### How do you compare Object and Map

    **Objects** are similar to **Maps** in that both let you set keys to values, retrieve those values, delete keys, and detect whether something is stored at a key. Due to this reason, Objects have been used as Maps historically. But there are important differences that make using a Map preferable in certain cases.

    1. The keys of an Object are Strings and Symbols, whereas they can be any value for a Map, including functions, objects, and any primitive.
    2. The keys in Map are ordered while keys added to Object are not. Thus, when iterating over it, a Map object returns keys in order of insertion.
    3. You can get the size of a Map easily with the size property, while the number of properties in an Object must be determined manually.
    4. A Map is an iterable and can thus be directly iterated, whereas iterating over an Object requires obtaining its keys in some fashion and iterating over them.
    5. An Object has a prototype, so there are default keys in the map that could collide with your keys if you're not careful. As of ES5 this can be bypassed by using map = Object.create(null), but this is seldom done.
    6. A Map may perform better in scenarios involving frequent addition and removal of key pairs.



9. ### What is the difference between == and === operators

    JavaScript provides both strict(===, !==) and type-converting(==, !=) equality comparison. The strict operators take type of variable in consideration, while non-strict operators make type correction/conversion based upon values of variables. The strict operators follow the below conditions for different types,
    1. Two strings are strictly equal when they have the same sequence of characters, same length, and same characters in corresponding positions.
    2. Two numbers are strictly equal when they are numerically equal. i.e, Having the same number value.
       There are two special cases in this,
       1. NaN is not equal to anything, including NaN.
       2. Positive and negative zeros are equal to one another.
    3. Two Boolean operands are strictly equal if both are true or both are false.
    4. Two objects are strictly equal if they refer to the same Object.
    5. Null and Undefined types are not equal with ===, but equal with ==. i.e,
        null===undefined --> false but null==undefined --> true

    Some of the example which covers the above cases,

    ```javascript
    0 == false   // true
    0 === false  // false
    1 == "1"     // true
    1 === "1"    // false
    null == undefined // true
    null === undefined // false
    '0' == false // true
    '0' === false // false
    []==[] or []===[] //false, refer different objects in memory
    {}=={} or {}==={} //false, refer different objects in memory
    ```



10. ### What are lambda or arrow functions

    An arrow function is a shorter syntax for a function expression and does not have its own **this, arguments, super, or new.target**. These functions are best suited for non-method functions, and they cannot be used as constructors.



11. ### What is a first class function

    In Javascript, functions are first class objects. First-class functions means when functions in that language are treated like any other variable.

    For example, in such a language, a function can be passed as an argument to other functions, can be returned by another function and can be assigned as a value to a variable. For example, in the below example, handler functions assigned to a listener

    ```javascript
    const handler = () => console.log ('This is a click handler function');
    document.addEventListener ('click', handler);
    ```



12. ### What is a first order function

    First-order function is a function that doesn’t accept another function as an argument and doesn’t return a function as its return value.

    ```javascript
    const firstOrder = () => console.log ('I am a first order function!');
    ```



13. ### What is a higher order function

    Higher-order function is a function that accepts another function as an argument or returns a function as a return value or both.

    ```javascript
    const firstOrderFunc = () => console.log ('Hello, I am a First order function');
    const higherOrder = ReturnFirstOrderFunc => ReturnFirstOrderFunc();
    higherOrder(firstOrderFunc);
    ```



14. ### What is a unary function

    Unary function (i.e. monadic) is a function that accepts exactly one argument. It stands for a single argument accepted by a function.
    
    Let us take an example of unary function,

    ```javascript
    const unaryFunction = a => console.log (a + 10); // Add 10 to the given argument and display the value
    ```



15. ### What is the currying function

    Currying is the process of taking a function with multiple arguments and turning it into a sequence of functions each with only a single argument. Currying is named after a mathematician **Haskell Curry**. By applying currying, a n-ary function turns it into a unary function. 
    
    Let's take an example of n-ary function and how it turns into a currying function,

    ```javascript
    const multiArgFunction = (a, b, c) => a + b + c;
    console.log(multiArgFunction(1,2,3));// 6
    
    const curryUnaryFunction = a => b => c => a + b + c;
    curryUnaryFunction (1); // returns a function: b => c =>  1 + b + c
    curryUnaryFunction (1) (2); // returns a function: c => 3 + c
    curryUnaryFunction (1) (2) (3); // returns the number 6
    ```

    Curried functions are great to improve **code reusability** and **functional composition**.



16. ### What is a pure function

    A **Pure function** is a function where the return value is only determined by its arguments without any side effects. i.e, If you call a function with the same arguments 'n' number of times and 'n' number of places in the application then it will always return the same value.
    
    Let's take an example to see the difference between pure and impure functions,

    ```javascript
    //Impure
    let numberArray = [];
    const impureAddNumber = number => numberArray.push(number);
    //Pure
    const pureAddNumber = number => argNumberArray =>
      argNumberArray.concat([number]);

    //Display the results
    console.log (impureAddNumber(6)); // returns 1
    console.log (numberArray); // returns [6]
    console.log (pureAddNumber(7) (numberArray)); // returns [6, 7]
    console.log (numberArray); // returns [6]
    ```

    As per above code snippets, **Push** function is impure itself by altering the array and returning an push number index which is independent of parameter value. Whereas **Concat** on the other hand takes the array and concatenates it with the other array producing a whole new array without side effects. Also, the return value is a concatenation of the previous array.
    
    Remember that Pure functions are important as they simplify unit testing without any side effects and no need for dependency injection. They also avoid tight coupling and make it harder to break your application by not having any side effects. These principles are coming together with **Immutability** concept of ES6 by giving preference to **const** over **let** usage.



17. ### What is the purpose of the let keyword

    The `let` statement declares a **block scope local variable**. Hence the variables defined with let keyword are limited in scope to the block, statement, or expression on which it is used. Whereas variables declared with the `var` keyword used to define a variable globally, or locally to an entire function regardless of block scope.
    
    Let's take an example to demonstrate the usage,

    ```javascript
    let counter = 30;
    if (counter === 30) {
      let counter = 31;
      console.log(counter); // 31
    }
    console.log(counter); // 30 (because the variable in if block won't exist here)
    ```



18. ### What is the difference between let and var

    You can list out the differences in a tabular format

    | var | let |
    |---- | ---------
    | It is been available from the beginning of JavaScript  | Introduced as part of ES6 |
    | It has function scope | It has block scope  |
    | Variables will be hoisted | Hoisted but not initialized |

    Let's take an example to see the difference,

    ```javascript
    function userDetails(username) {
       if(username) {
         console.log(salary); // undefined due to hoisting
         console.log(age); // ReferenceError: Cannot access 'age' before initialization
         let age = 30;
         var salary = 10000;
       }
       console.log(salary); //10000 (accessible to due function scope)
       console.log(age); //error: age is not defined(due to block scope)
    }
    userDetails('John');
    ```



19. ### What is the reason to choose the name let as a keyword

    `let` is a mathematical statement that was adopted by early programming languages like **Scheme** and **Basic**. It has been borrowed from dozens of other languages that use `let` already as a traditional keyword as close to `var` as possible.



20. ### How do you redeclare variables in switch block without an error

    If you try to redeclare variables in a `switch block` then it will cause errors because there is only one block. For example, the below code block throws a syntax error as below,

    ```javascript
    let counter = 1;
    switch(x) {
      case 0:
        let name;
        break;

      case 1:
        let name; // SyntaxError for redeclaration.
        break;
    }
    ```

    To avoid this error, you can create a nested block inside a case clause and create a new block scoped lexical environment.

    ```javascript
    let counter = 1;
        switch(x) {
          case 0: {
            let name;
            break;
          }
          case 1: {
            let name; // No SyntaxError for redeclaration.
            break;
          }
        }
    ```



21. ### What is the Temporal Dead Zone

    The Temporal Dead Zone is a behavior in JavaScript that occurs when declaring a variable with the let and const keywords, but not with var. In ECMAScript 6, accessing a `let` or `const` variable before its declaration (within its scope) causes a ReferenceError. The time span when that happens, between the creation of a variable’s binding and its declaration, is called the temporal dead zone.
    
    Let's see this behavior with an example,

    ```javascript
    function somemethod() {
      console.log(counter1); // undefined
      console.log(counter2); // ReferenceError
      var counter1 = 1;
      let counter2 = 2;
    }
    ```



22. ### What is IIFE(Immediately Invoked Function Expression)

    IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined. The signature of it would be as below,

    ```javascript
    (function ()
        {
          // logic here
        }
     )
    ();
    ```

    The primary reason to use an IIFE is to obtain data privacy because any variables declared within the IIFE cannot be accessed by the outside world. i.e, If you try to access variables with IIFE then it throws an error as below,

    ```javascript
    (function ()
            {
              var message = "IIFE";
              console.log(message);
            }
     )
    ();
    console.log(message); //Error: message is not defined
    ```



23. ### What is the benefit of using modules

    There are a lot of benefits to using modules in favour of a sprawling. Some of the benefits are,
    1. Maintainability
    2. Reusability
    3. Namespacing



24. ### What is memoization

    Memoization is a programming technique which attempts to increase a function’s performance by caching its previously computed results.  Each time a memoized function is called, its parameters are used to index the cache. If the data is present, then it can be returned, without executing the entire function. Otherwise the function is executed and then the result is added to the cache.
    Let's take an example of adding function with memoization,

    ```javascript
    const memoizAddition = () => {
      let cache = {};
     return (value) => {
      if (value in cache) {
       console.log('Fetching from cache');
       return cache[value]; // Here, cache.value cannot be used as property name starts with the number which is not a valid JavaScript  identifier. Hence, can only be accessed using the square bracket notation.
      }
      else {
       console.log('Calculating result');
       let result = value + 20;
       cache[value] = result;
       return result;
      }
     }
    }
    // returned function from memoizAddition
    const addition = memoizAddition();
    console.log(addition(20)); //output: 40 calculated
    console.log(addition(20)); //output: 40 cached
    ```



25. ### What is Hoisting

    Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution. Remember that JavaScript only hoists declarations, not initialisation.
    Let's take a simple example of variable hoisting,

    ```javascript
    console.log(message); //output : undefined
    var message = 'The variable Has been hoisted';
    ```

    The above code looks like as below to the interpreter,

    ```javascript
    var message;
    console.log(message);
    message = 'The variable Has been hoisted';
    ```



26. ### What are classes in ES6

    In ES6, Javascript classes are primarily syntactic sugar over JavaScript’s existing prototype-based inheritance.
    For example, the prototype based inheritance written in function expression as below,

    ```javascript
    function Bike(model,color) {
        this.model = model;
        this.color = color;
    }

    Bike.prototype.getDetails = function() {
        return this.model + ' bike has' + this.color + ' color';
    };
    ```

    Whereas ES6 classes can be defined as an alternative

    ```javascript
    class Bike{
      constructor(color, model) {
        this.color= color;
        this.model= model;
      }

      getDetails() {
        return this.model + ' bike has' + this.color + ' color';
      }
    }
    ```



27. ### What are closures

    A closure is the combination of a function and the lexical environment within which that function was declared. i.e, It is an inner function that has access to the outer or enclosing function’s variables. The closure has three scope chains
    
    1. Own scope where variables defined between its curly brackets
    2. Outer function’s variables
    3. Global variables
    
    Let's take an example of closure concept,

    ```javascript
    function Welcome(name){
      var greetingInfo = function(message){
       console.log(message+' '+name);
      }
    return greetingInfo;
    }
    var myFunction = Welcome('John');
    myFunction('Welcome '); //Output: Welcome John
    myFunction('Hello Mr.'); //output: Hello Mr.John
    ```

    As per the above code, the inner function(i.e, greetingInfo) has access to the variables in the outer function scope(i.e, Welcome) even after the outer function has returned.



28. ### What are modules

    Modules refer to small units of independent, reusable code and also act as the foundation of many JavaScript design patterns.  Most of the JavaScript modules export an object literal, a function, or a constructor



29. ### Why do you need modules

    Below are the list of benefits using modules in javascript ecosystem
    1. Maintainability
    2. Reusability
    3. Namespacing



30. ### What is scope in javascript

    Scope is the accessibility of variables, functions, and objects in some particular part of your code during runtime. In other words, scope determines the visibility of variables and other resources in areas of your code.

