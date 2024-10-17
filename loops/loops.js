// The For Loop

//A for loop contains three expressions separated by ; inside the parentheses:
//an initialization starts the loop and can also be used to declare the iterator variable.;
//a stopping condition is the condition that the iterator variable is evaluated against— if the condition evaluates to true the code block will run, and if it evaluates to false the code will stop.
//an iteration statement is used to update the iterator variable on each loop.

for (let counter = 5; counter < 11; counter++) {
  console.log(counter);
}

// Looping in Reverse

for (let counter = 3; counter >= 0; counter--){
  console.log(counter);
}

// Looping through Arrays

// To loop through each element in an array, a for loop should use the array’s .length property in its condition.

const vacationSpots = ['Bali', 'Paris', 'Tulum'];

for (let i = 0; i < vacationSpots.length; i++){
  console.log('I would love to visit ' + vacationSpots[i]);
}
