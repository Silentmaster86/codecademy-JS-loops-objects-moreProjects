/* 

In some cases, you want a piece of code to run at least once and then loop based on a specific condition after its initial run. This is where the do...while statement comes in.

A do...while statement says to do a task once and then keep doing it until a specified condition is no longer met.

*/

let cupsOfSugarNeeded = 3;
let cupsAdded = 0;

do {
  cupsAdded++
  console.log('Number of cup was added: ' + cupsAdded)
} while (cupsAdded < cupsOfSugarNeeded);