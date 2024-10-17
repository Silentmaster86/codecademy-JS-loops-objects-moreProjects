/* 
When we have a loop running inside another loop, we call that a nested loop. One use for a nested for loop is to compare the elements in two arrays. For each round of the outer for loop, the inner for loop will run completely.
*/

let bobsFollowers = ['Simon', 'Marta', 'Daisy', 'Jakub'];
let tinasFollowers = ['Simon', 'Jakub', 'Natalie'];
let mutualFollowers = [];
for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(bobsFollowers[i]);
    }
  }
}
console.log(mutualFollowers);