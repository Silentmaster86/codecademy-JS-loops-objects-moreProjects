/* 
The while loop creates a loop that is executed as long as a specified condition evaluates to true. The loop will continue to run until the condition evaluates to false. The condition is specified before the loop, and usually, some variable is incremented or altered in the while loop body to determine when the loop should stop.
*/

const cards = ['diamond', 'spade', 'heart', 'club'];

let currentCard = [];
while (currentCard !== "spade") {
  currentCard = cards[Math.floor(Math.random() * 4)];
console.log(currentCard);
}