/*

We are often unaware of the number of assumptions we make when communicating in our native languages. If we told you to “count to three,” we would expect you to say the numbers “one”, “two”, and “three”. We assumed you would know to start with “one” and end with “three”. With programming, we need to be more explicit with our directions to the computer. Here’s how we might tell the computer to “count to three”:

for (let i = 1; i <= 3; i++) {
  console.log(i);
}

When we speak to other humans, we share a vocabulary that provides quick ways to communicate complicated concepts. When we say the word “bake”, it calls to mind a familiar subroutine— preheating an oven, putting something into an oven for a set amount of time, and finally removing it. This allows us to abstract away a lot of the details and communicate key concepts more concisely. Instead of listing all those details, we can say, “We baked a cake,” and still impart all that meaning to you.

In this lesson, we’ll learn how to use “abstraction” in programming by writing 
Preview: Docs Loading link description
functions
. In addition to allowing us to reuse our code, functions help to make clear, readable programs. If you encounter countToThree() in a program, you might be able to quickly guess what the function does without having to stop and read the function’s body.

We’re also going to learn about a way to add another level of abstraction to our programming: higher-order functions. Higher-order functions are functions that accept other functions as arguments and/or return functions as output. This enables us to build abstractions on other abstractions, just like “We hosted a birthday party” is an abstraction that may build on the abstraction “We made a cake.”

*/

// Functions as Data

/*

JavaScript functions behave like any other data type in the language; we can assign functions to variables, and we can reassign them to new variables.

Below, we have an annoyingly long function name that hurts the readability of any code in which it’s used. Note: If the below function’s syntax feels unfamiliar, revisit the arrow functions exercise to refresh your knowledge on ES6 arrow notation.

const announceThatIAmDoingImportantWork = () => {
    console.log("I’m doing very important work!");
};

Let’s pretend this function does important work and needs to be called repeatedly. To rename this function without sacrificing the source code, we can re-assign the function to a variable with a suitably short name:

----------------------------------------------------------------
const busy = announceThatIAmDoingImportantWork;

busy(); // This function call barely takes any space!
----------------------------------------------------------------

busy is a variable that holds a reference to our original function. If we could look up the address in memory of busy and the address in memory of announceThatIAmDoingImportantWork they would point to the same place. Our new busy() function can be invoked with parentheses as if that was the name we originally gave our function.

Notice how we assign announceThatIAmDoingImportantWork without parentheses as the value to the busy variable. We want to assign the value of the function itself, not the value it returns when invoked.

In JavaScript, functions are first class objects. This means that, like other objects you’ve encountered, JavaScript functions can have properties and methods.

Since functions are a type of object, they have properties such as .length and .name, and methods such as .toString(). You can see more about the methods and properties of functions in the documentation.

Functions are special because we can invoke them, but we can still treat them like any other type of data

*/

const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
  for(let i = 1; i <= 1000000; i++) {
    if ( (2 + 2) != 4) {
      console.log('Something has gone very wrong :( ');
    }
  }
};

const isTwoPlusTwo = checkThatTwoPlusTwoEqualsFourAMillionTimes;
isTwoPlusTwo();
console.log(isTwoPlusTwo.name);

// Functions as Parameters

/*

As you know, a parameter is a placeholder for the data that gets passed into a function. Since functions can behave like any other type of data in JavaScript, it might not surprise you to learn that functions can accept other functions as parameters. A higher-order function is a function that either accepts functions as parameters, returns a function, or both! We call functions that get passed in as parameters callback functions. Callback functions get invoked during the execution of the higher-order function.

When we invoke a higher-order function, and pass another function in as an argument, we don’t invoke the argument function. Invoking it would evaluate to passing in the return value of that function call. With callback functions, we pass in the function itself by typing the function name without the parentheses:

----------------------------------------------------------------

const higherOrderFunc = param => {
  param();
  return `I just invoked ${param.name} as a callback function!`
}
 
const anotherFunc = () => {
  return 'I\'m being invoked by the higher-order function!';
}

higherOrderFunc(anotherFunc);

----------------------------------------------------------------

We wrote a higher-order function higherOrderFunc that accepts a single parameter, param. Inside the body, param gets invoked using parentheses. And finally, a string is returned, telling us the name of the callback function that was passed in.

Below the higher-order function, we have another function aptly named anotherFunc. This function aspires to be called inside the higher-order function.

Lastly, we invoke higherOrderFunc(), passing in anotherFunc as its argument, thus fulfilling its dreams of being called by the higher-order function.

----------------------------------------------------------------

higherOrderFunc(() => {
  for (let i = 0; i <= 10; i++){
    console.log(i);
  }
});

----------------------------------------------------------------

In this example, we invoked higherOrderFunc() with an anonymous function (a function without a name) that counts to 10. Anonymous functions can be arguments too!

*/

const addTwo = num => {
  return num + 2;
}

const checkConsistentOutput = (func, val) => {
  let checkA = val + 2;
  let checkB = func(val);
  return checkA === checkB ? func(val) : 'inconsistent results';  
}

console.log(checkConsistentOutput(addTwo, 10));