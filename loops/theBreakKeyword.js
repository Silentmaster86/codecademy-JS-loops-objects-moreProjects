/*

Imagine we’re looking to adopt a dog. We plan to go to the shelter every day for a year and then give up. But what if we meet our dream dog on day 65? We don’t want to keep going to the shelter for the next 300 days just because our original plan was to go for a whole year. In our code, when we want to stop a loop from continuing to execute even though the original stopping condition we wrote for our loop hasn’t been met, we can use the keyword break.

The break keyword allows programs to “break” out of the loop from within the loop’s block.

*/

const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

// loop without 'break'

for (let i = 0; i < rapperArray.length; i++) {
  if (i > 2) {
  }
  console.log(rapperArray[i]);
}

console.log("And if you don't know, now you know.")

console.log('---------------------------------------')

// loop with 'break'

for (let x = 0; x < rapperArray.length; x++) {
  if (x > 2) {
    break;
  }
  console.log(rapperArray[x]);
}

console.log("And if you don't know, now you know.")