# Mark 13: Palindrome Birthday

## Problem Statement

1. Ask the user to input his/her birth date
2. Check if the entered birthdate is a palindrome, if yes, show a message
3. If the entered birthdate is not a palindrome:
- Find the nearest palindrome date
- Find how many days they missed

### Tech stack used

`HTML`, `CSS`, and `JavaScript`

### What are we building?

```jsx
We are going to build a palindrome birthday checker that will also show the 
nearest palindrome date and how many days missed.
```

### **[Live app**](https://replit.com/@kushanksriraj/palindrome-bday#index.html)

## Step 1: Building the logic

---

### Ex-01: Write a function in JS that takes a string and reverses it

```jsx
// You can use inbuilt javascript methods like split, reverse and join

var str = 'hello';

// split
var charList = str.split(''); // -> ['h', 'e', 'l', 'l', 'o']

// reverse
var reversedList = charList.reverse() // -> ['o', 'l', 'l', 'e', 'h']

// join
reversedList.join('') // -> 'olleh'

// Input: a string (Example: "hello")
// Output: reverse of the input string (Example: "olleh")
```

**[Solution](https://replit.com/@kushanksriraj/palindrome-bday-ex-1#script.js)**

Tip: Read about `[split()` ,  `join()`](https://javascript.info/array-methods#split-and-join)  and `[reverse()](https://javascript.info/array-methods#reverse)`

### Ex-02: Write a JS function to check for palindrome

```jsx
// Use the reverse string function you made in Ex.1 for this
// Input: a string "racecar"
// Output: a boolean(true/false) stating whether the string is palindrome or not
```

**[Solution](https://replit.com/@kushanksriraj/palindrome-bday-ex-2#script.js)**

### Ex-03: Write a function that converts the date from number to string

```jsx
// Input: { day: 14, month: 9, year: 2020 }
// Output: { day: '14', month: '09', year: '2020' }

// Take care of '0' when day/month is less than 10
```

**[Solution](https://replit.com/@kushanksriraj/palindrome-bday-ex-3#script.js)**

Tip: Read about `[.toString()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString)` method.

### Ex-04: Write a JS function that takes a date and returns all variations of it

```jsx
// Your function will return an array of strings for these date formats

// DD-MM-YYYY
// MM-DD-YYYY
// YYYY-MM-DD
// DD-MM-YY
// MM-DD-YY
// YY-MM-DD

// The hyphen (-) is for representation only, return the strings without hyphens

// Input: { day: 10, month: 9, year: 2020 }
// output: ['10092020', '09102020', '20200910', '091020', '100920', '200910']

```

**[Solution](https://replit.com/@kushanksriraj/palindrome-bday-ex-4#script.js)**

Tip: Read about `[slice()](https://javascript.info/array-methods#slice)` method.

### Ex-05: Write a function that checks palindrome for all the date formats

 

```jsx
// Hint: Use the previous function to get all formats and loop through it

// Input: { day: '10', month: '09', year: '2020' }

// Output: Array of six elements having boolean value for each date format
  > [false, false, false, false, false, false]

// live implementation

function checkPalindromeForAllDateFormats(date){
  var listOfPalindromes = getAllDateFormats(date);

  var flag = false;

  for(var i=0; i < listOfPalindromes.length; i++){
    if(isPalindrome(listOfPalindromes[i])){
      flag = true;
      break;
    }
  }
  
  return flag;
}
```

**[Solution](https://replit.com/@kushanksriraj/palindrome-bday-ex-5#script.js)**

Tip: Read about `[.push()](https://javascript.info/array#methods-pop-push-shift-unshift)` array method.

### Ex-06: Find the next palindrome date, also how many days are in between

```jsx
// If the current date is not a palindrome, find the next palindrome date

// Input: { day: 5, month: 1, year: 2020 }
// Output: [28, { day: 2, month: 2, year: 2020 }]
```

**[Solution](https://replit.com/@kushanksriraj/palindrome-bday-ex-6#script.js)**

## Step 2: Building the UI

---

### Ex-08: Get date from user and console.log it on button click

 

```jsx
// Use input element for getting date
// Simply console.log the input date when the user clicks the button
```

**[Solution](https://replit.com/@kushanksriraj/palindrome-bday-ex-8#script.js)**

### Ex-09: Joining all the dots

```jsx
// Stitch all the functions together to build the app
```

**[Solution](https://replit.com/@kushanksriraj/palindrome-bday-ex-9#script.js)**

---

## Bonus

- Find the previous palindrome date, also how many days are in between

```jsx
// If the current date is not a palindrome, find the next palindrome date

// Input: { day: 4, month: 2, year: 2020 }
// Output: [2, { day: 2, month: 2, year: 2020 }]
```

**[Solution](https://replit.com/@kushanksriraj/palindrome-bday-ex-7#script.js)**

- Currently, we are showing `days` even when the missed by day is 1

```jsx
// Use a ternary operator to decide whether 'day' or 'days' should be printed
```

- Use CSS to style the web app, you can use SVG for background, cakes, and balloon images for a more attractive look
- Use `setTimeout()` to create artificial delay and show "Processing..." text or gif to make your user experience even better