// Very crazy project.

const input = "turtles and whales are the same sea creatures";
const vowels = ["a", "e", "i", "o", "u"];
const resultArray = [];
for (i = 0; i < input.length; i++) {
  if (input[i] === 'e') {
    resultArray.push(input[i]);
  }
   if (input[i] === 'u') {
    resultArray.push(input[i]);
  }
  for (j = 0; j < vowels.length; j++) {
    if (input[i] === vowels[j]) {
      resultArray.push(input[i]);
    }
  }
}

const resulString = (resultArray.join('').toUpperCase());

console.log(resulString);

// Now we cane speak in whales language!!!