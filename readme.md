# L1 : How execution context and program stack works
- Eveything in js hapens inside execution context.
- Execution context consist of :
  - **Variable environment** : Stores functions and variable in key value pair
  - **Code component**  : Code is executed synchronously 
- It is synchronous single threaded language.

# L2 : Phases in global execution context.
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
  
# L3 : Hoisting in JS
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
# L4 : Shortest JS

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


# L5 : Lexical env
- local memory + lexical env of parent .
- JS travers through scope chain to find the variable in lexical scope of itself and parent .

# L6 : let, const , temporal dead zone
- let and const are hoisted in seperate scope called script scope.
- You can access var variables before initilization because of hoisting. (In global execution stack it's value is set to undefined).
- let/ const cannot be accessed before they are intilized .
- Temportal deadzone : let/ const variables are set to undefined in phase 1 but you cannot access/use them before           intilization. the time period between declcaring and intilization is called temporal dead zone.
- You cannot access let/const through window object, they are in seperate scope and space. Same goes for this.

# L7 : Closures
- function bind together with it's lexical scope.
- Example: when function are returned from another function, they remember the varibles they will use. See notes for more.
- Disadvantage : Lot of memeory is consumed.

# L8 : Event loop
- Call stack is present inside JS engine
- There are web API's which browser provides us, some of them are - setTimeout, fetch etc
- These web API's can be accessed by call stack, therefore we are able to use these in our JS code.
- Jon of event loop is to monitor call stack, if call stack is found empty, it'll check the callback queue and will push any cb in call stack.

# L9 : JS runtime env
- Every browser has JS runtime env/engine.
- NodeJS has it's own JS runtime env/engine.