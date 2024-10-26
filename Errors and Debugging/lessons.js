// Reading Error Stack Traces

/*

Now that we know what information we can get from an error stack trace, let’s take a look at an example.

-------------------------------------------------------------------
/home/ccuser/workspace/learn-javascript-debugging-code/app.js:1
myVariable;
^

ReferenceError: myVariable is not defined
...
-------------------------------------------------------------------

Using this stack trace, let’s answer three questions you should ask yourself every time you want to debug an error:

    1.In what line did the error occur? You can almost always find this information on the first line of the stack trace in the following format <file path>/<file name>:<line number>. In this example, the location is app.js:1. This means that the error was thrown in the file named app.js on line 1.

    2. What type of error was thrown? The first word on the fifth line of the stack trace is the type of error that was thrown. In this case, the type of error was ReferenceError. We will discuss this error type in the next exercise.

    3. What is the error message? The rest of the fifth line after the error type provides an error message, describing what went wrong. In this case, the description is myVariable is not defined.

You might notice in this example we skipped explaining a few lines in the stack trace and only included the beginning of the stack trace. A large part of debugging errors is recognizing which pieces of information are useful and which ones aren’t. For now, you will succeed by focusing on just the first and fifth lines of your error stack traces.

*/

//Based on the following error stack trace, fill in the answers to the questions below:

/*------------------------------------------------------------------

/home/ccuser/workspace/learn-javascript-debugging-code/script.js:5
if (numberSum > total;) {
                     ^
            
SyntaxError: Unexpected token ;
------------------------------------------------------------------

*/


/* From what file was this error thrown?
1 - Answer: script.js
On what line of that file was this error thrown?
2 - Answer: 5
What type of error was thrown in this stack trace?
3 - Answer: SyntaxError
What is the description of the error in this stack trace?
4 - Answer: Unexpected token

*/

// JavaScript Error Types

/*

Now that you can identify the type of error from an error stack trace, you might be wondering what the different types of errors mean.

Here are three common error types:

    -- SyntaxError: This error will be thrown when a typo creates invalid code — code that cannot be interpreted by the compiler. When this error is thrown, scan your code to make sure you properly opened and closed all brackets, braces, and parentheses and that you didn’t include any invalid semicolons.
    -- ReferenceError: This error will be thrown if you try to use a variable that does not exist. When this error is thrown, make sure all variables are properly declared.
    -- TypeError: This error will be thrown if you attempt to perform an operation on a value of the wrong type. For example, if we tried to use a string method on a number, it would throw a TypeError.

There are seven types of built-in JavaScript errors in total. You can find more information about all of them at the MDN JavaScript Error documentation. Whenever you are confronted with an error you can’t comprehend, consulting this documentation is a great place to start.

*/

/*

myVariable++;
1 - What type of error will be thrown on the line above: 
ReferenceError
const myString = 42;
myString.substring(0);
2 - What type of error will be thrown on the line above: 
TypeError
const myRandomNumber; = Math.random();
3 - What type of error will be thrown on the line above: 
SyntaxError

*/


// Debugging Errors

/*

Here’s a process for efficiently working through your code’s errors one by one:

1. Run your code. Using the first error’s stack trace, identify the error’s type, description, and location.
2. Go to the file name and line number indicated by the error stack trace. Using the error type and description, identify the bug in your code.
3. Fix the bug and re-run your code.
4. Repeat steps 1-3 until your code no longer throws any errors.

While these steps may seem simple, it can be easy to get overwhelmed by errors in practice. Using these steps, you can tackle your errors one at a time and soon will have your code running error-free.

Code with errors:

function isSumBigger(number1, number2, total {
  const sum = number1 + number2;
  
  if (numberSum > total;) {
    return true;
  } else {
    return false;
  }
}

---- >Should return true
console.log('isSumBigger(1, 3, 2) returns: ' + isSumBigger(1, 3, 2));

---- > Should return false
console.log('isSumBigger(1, 3, 5) returns: ' + isSumBigger(1, 3, 5));

-------------------------------------------------------------------------

/home/ccuser/workspace/debugging-code-debugging-errors/app.js:1
(function (exports, require, module, __filename, __dirname) { function isSumBigger(number1, number2, total {
                                                                                                           ^
SyntaxError: Unexpected token {
    at createScript (vm.js:53:10)
    at Object.runInThisContext (vm.js:95:10)
    at Module._compile (module.js:543:28)
    at Object.Module._extensions..js (module.js:580:10)
    at Module.load (module.js:488:32)
    at tryModuleLoad (module.js:447:12)
    at Function.Module._load (module.js:439:3)
    at Module.runMain (module.js:605:10)
    at run (bootstrap_node.js:427:7)
    at startup (bootstrap_node.js:151:9)

-----------------------------------------------------------------------------

Code without errors:

function isSumBigger(number1, number2, total) {
  const sum = number1 + number2;
  
  if (sum > total) {
    return true;
  } else {
    return false;
  }
}

------ > Should return true
console.log('isSumBigger(1, 3, 2) returns: ' + isSumBigger(1, 3, 2));

------ > Should return false
console.log('isSumBigger(1, 3, 5) returns: ' + isSumBigger(1, 3, 5));
*/

// Locating Silent Bugs

/*

Errors thrown by the computer are really useful because they identify the bug type and location for you right away. However, even if your code runs error-free, it is not necessarily bug-free.

You may find that your code is consistently returning incorrect values without throwing any errors. A lack of thrown errors does not mean your code logic is completely correct.

An incredibly powerful tool for locating bugs is a method you likely learned very early on in your JavaScript journey: console.log()!

By adding print statements to our code, we can identify where things have gone wrong.

Let’s try using console.log() to do some debugging.

*/

function capitalizeASingleWord(word) {
  // console.log(word);
  if (word.match(' ')) {
    console.log('Word value inside of if statement: ' + word);
    return null;
  }
  
  let firstLetter = word.charAt(0);
  const restOfWord = word.slice(1);
  
  firstLetter = firstLetter.toUpperCase();
  
  return firstLetter + restOfWord;
}

// Should return "Hey"
console.log("capitalizeASingleWord('hey') returns: " + capitalizeASingleWord('hey')); 

// Should return null
console.log("capitalizeASingleWord('hey ho') returns: " + capitalizeASingleWord('hey ho'));


// Debugging with console.log()

/*

Let’s synthesize our workflow from the previous exercise into a reusable set of debugging steps.

1. Go to the beginning of the malfunctioning code. Print out all starting variables, existing values, and arguments using console.log(). If the values are what you expect, move on to the next piece of logic in the code. If not, you have identified a bug and should skip to step 3.
2. After the next piece of logic in your code, add console.log() statements to ensure updated variables have the values that you now expect and that the block of code is being executed. If that logic is executing properly, continue repeating this step until you find a line not working as expected, then move to step 3.
3. Fix the identified bug and run your code again. If it now works as expected, you’ve finished debugging! If not, continue stepping through your code using step 2 until it does.

This might seem like a lot of printing, but once you get into the routine of it, it will be far faster than trying to stare at your code until you find your bugs.

*/

// Returns the string whose first letter is later in the alphabet. If both first letters are equal, returns null.
function getLaterFirstLetter(string1, string2) {
  const firstLetter1 = string1.charAt(0);
  const firstLetter2 = string2.charAt(0);

  if (firstLetter1 === firstLetter2) {
    return null;
  } else if (firstLetter1 < firstLetter2) {
    return string2;
  } else {
    return string1;
  }
}

// Should return "blueberry"
console.log(
  "getLaterFirstLetter('avocado', 'blueberry') returns: " +
    getLaterFirstLetter("avocado", "blueberry")
);

// Should return "zebra"
console.log(
  "getLaterFirstLetter('zebra', 'aardvark') returns : " +
    getLaterFirstLetter("zebra", "aardvark")
);

// Should return null
console.log(
  "getLaterFirstLetter('astro', 'afar') returns: " +
    getLaterFirstLetter("astro", "afar")
);

// Finding Documentation

/*

Sometimes once you’ve tracked down a bug, you might still be confused on how to fix it! Whenever you want to know more about how JavaScript works and what it can do, the best place to go is documentation. You can find the JavaScript documentation at the MDN JavaScript web docs.

The MDN JavaScript web docs are a powerful resource, but they can be overwhelming because they cover so much information. We encourage you to explore the docs, but often the fastest way to access a specific part of the docs you’re interested in is to Google it.

For example, if we wanted more information on the Number object’s .isNan() method, we could Google “MDN isNan” and then click the link to the MDN page. If we were looking to see a list of all of the String built-in methods, we might Google “MDN String”, click the link to MDN, and then scroll down to the “Methods” section of the documentation.

There are many ways to get to the documentation you are looking for. Find the one that works best for your workflow.

*/

// Link to String.repeat() documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat
function doubleString(string) {
  return string.repeat(2);
}

// Should return 'echoecho'
console.log("doubleString('echo') returns: " + doubleString('echo'));


// Stack Overflow

/*

At this point, you might be thinking to yourself, documentation is good and all, but there’s no way it will solve all of my issues! And we totally agree. All programming languages have difficult problems and strange edge cases that appear unexpectedly and are sometimes impossible to solve alone.

If you are ever stuck trying to solve a coding problem, we strongly encourage you to Google for a solution. One of the best sites you will see appear in the search results is Stack Overflow.

Stack Overflow is a question and answer forum where frustrated programmers post issues and other programmers discuss and vote for solutions. Almost always if you have an issue, Stack Overflow has an answer.

For example, say you are stumped trying to write an alphabetize function. If you search “alphabetize string JavaScript” on Google, this Stack Overflow search result will appear. You can quickly scan through the answers on it to see which ones work for you.

If you are ever programming and a problem is becoming so insurmountable that you want to quit, Stack Overflow is a great place to go to get unstuck.


*/

// Returns whether or not the provided string contains a substring of "cake" in it.
function containsCake(string) {
  return string.includes("cake");
}

// Should return true
console.log(
  "containsCake('I think cake is my soul mate.') returns: " +
    containsCake("I think cake is my soul mate.")
);

// Should return false
console.log(
  "containsCake('Pie is certainly the coolest dessert.') returns: " +
    containsCake("Pie is certainly the coolest dessert.")
);


// REVIEW

/*

You just learned a lot of techniques for helping you get unstuck in all debugging situations. Congratulations! Let’s synthesize everything you learned into one debugging process.

1. Is your code throwing errors? If so, read the error stack trace for the type, description, and location of the error. Go to the error’s location and try to fix.
2. Is your code broken but not throwing errors? Walk through your code using console.log() statements. When unexpected results occur, isolate the bug and try to fix it.
3. id you locate the bug using steps 1 and 2, but can’t fix the bug? Consult documentation to make sure you are using all JavaScript functionality properly. If you are still stuck, Google your issue and consult Stack Overflow for help. Read solutions or post your own Stack Overflow question if none exist on the topic.

*/

/*

function isStringPerfectLength(string, minLength, maxLength) {
  const stringLength = string.length;
  
  if (stringLength < minLength) {
    return false;
  } else if (stringLength > maxLength) {
    return false;
  } else {
    return true;
  }
}

-- Should return true
console.log("isStringPerfectLength('Dog', 2, 4) returns: " + isStringPerfectLength('Dog', 2, 4));

-- Should return false
console.log("isStringPerfectLength('Mouse', 2, 4) returns: " + isStringPerfectLength('Mouse', 2, 4));

-- Should return false
console.log("isStringPerfectLength('Cat', 4, 9) returns: " + isStringPerfectLength('Cat', 4, 9));

/home/ccuser/workspace/debugging-code-review/app.js:1
(function (exports, require, module, __filename, __dirname) { function isStringPerfectLength(string, minLength, maxLength {
                                                                                                                          ^
SyntaxError: Unexpected token {
    at createScript (vm.js:53:10)
    at Object.runInThisContext (vm.js:95:10)
    at Module._compile (module.js:543:28)
    at Object.Module._extensions..js (module.js:580:10)
    at Module.load (module.js:488:32)
    at tryModuleLoad (module.js:447:12)
    at Function.Module._load (module.js:439:3)
    at Module.runMain (module.js:605:10)
    at run (bootstrap_node.js:427:7)
    at startup (bootstrap_node.js:151:9)


*/

function isStringPerfectLength(string, minLength, maxLength) {
  const stringLength = string.length;
  
  if (stringLength < minLength) {
    return false;
  } else if (stringLength > maxLength) {
    return false;
  } else {
    return true;
  }
}

// Should return true
console.log("isStringPerfectLength('Dog', 2, 4) returns: " + isStringPerfectLength('Dog', 2, 4));

// Should return false
console.log("isStringPerfectLength('Mouse', 2, 4) returns: " + isStringPerfectLength('Mouse', 2, 4));

// Should return false
console.log("isStringPerfectLength('Cat', 4, 9) returns: " + isStringPerfectLength('Cat', 4, 9));