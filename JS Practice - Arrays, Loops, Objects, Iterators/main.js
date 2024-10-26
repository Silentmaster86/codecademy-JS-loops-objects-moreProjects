// No.1 reverse Array()

const reverseArray = arr => {
    let reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }
    return reversed
}
/*
/ Alternate solutions:

/ Using the .unshift() method
const reverseArray = arr => {
    let reversed = [];
    for (let i = 0; i < arr.length; i++) {
        reversed.unshift(arr[i]);
    }
    return reversed
}

/ As a function declaration:
function reverseArray(arr) {
    let reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }
    return reversed
}
*/

const sentence = ['sense.','make', 'all', 'will', 'This'];

console.log(reverseArray(sentence)); 

// No.2 greetAliens()

const greetAliens = arr => {
      for (let i = 0; i < arr.length; i++) {
            console.log('Oh powerful ' + arr[i] + ', we humans offer our unconditional surrender!');
      }
}

/*
/ Alternate solutions:

/ Using string interpolation
const greetAliens = arr
for (let i = 0; i<arr.length; i++){
    console.log(`Oh powerful ${arr[i]}, we humans offer our unconditional surrender!`);
}

/ As a function declaration:
function greetAliens(arr) {
for (let i = 0; i<arr.length; i++){
    console.log(`Oh powerful ${arr[i]}, we humans offer our unconditional surrender!`);
}
}

*/

const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];

greetAliens(aliens);

// No.3 convertToBaby()

const convertToBaby = arr => {
      const babyArray = [];
      for (let i = 0; i < arr.length; i++) {
            babyArray.push('baby ' + arr[i]);
      }
      return babyArray
}

/*
/ As a function declaration:
function convertToBaby(arr) {
      const babyArray = [];
      for (let i = 0; i < arr.length; i++) {
            babyArray.push('baby ' + arr[i]);
      }
      return babyArray
}
*/ 

const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];

console.log(convertToBaby(animals));

// No.4 Fix The Broken Code!

/*

We wrote a function, smallestPowerOfTwo(), which should take in an array and return the lowest power of 2 that is greater than or equal to each number in that array. A power of two is any value 2n where n is a non-negative integer (including 0). The list of powers of 2 for non-negative integers starts with [1, 2, 4, 8, 16, 32, 64,...] where 20=1, 21=2, 22=4, and so on.

For example, if the array were:

const myArray = [6, 2, 11, 50];

Then the smallestPowerOfTwo() function should return the following array:

[ 8, 2, 16, 64 ]

*/

const numbers = [5, 3, 9, 30];

const smallestPowerOfTwo = arr => {
      let results = [];
      // The 'outer' for loop:
      for (let i = 0; i < arr.length; i++) {
            number = arr[i];

            // The 'inner' while loop:
            // We needed to create a new variable!
            let j = 1;
            while (j < number) {
                  j = j * 2;
            }
            results.push(j);
      }
      return results
}

console.log(smallestPowerOfTwo(numbers));

// No. 5 declineEverything() and acceptEverything()

const veggies = ['broccoli', 'spinach', 'cauliflower', 'broccoflower'];

const politelyDecline = (veg) => {
      console.log('No ' + veg + ' please. I will have pizza with extra cheese.');
}

// Checkpoint 1 solutions:
const declineEverything = arr => {
  arr.forEach(politelyDecline)
}

/*
/ As a function declaration:
function declineEverything(arr) {
      arr.forEach(politelyDecline)
}
*/


// Checkpoint 2 solutions:
// Using an anonymous function and string interpolation:
const acceptEverything = arr => {
  arr.forEach(e => {
    console.log(`Ok, I guess I will eat some ${e}.`)
  })
}

/*
/ Using a named function and string concatenation:
const grudginglyAccept = veg => {
      console.log('Ok, I guess I will eat some ' + veg + '.');
}
const acceptEverything = arr => {
      arr.forEach(grudginglyAccept)
}

/ Using a loop:
const acceptEverything = arr => {
 for(let i = 0; i<arr.length; i++){
    console.log(`Ok, I guess I will eat some ${arr[i]}.`)
 }
}
*/

// No. 6 squareNums()

const numbers = [2, 7, 9, 171, 52, 33, 14];

const toSquare = num => num * num

const squareNums = arr => arr.map(toSquare) 

/*
/ Using an anonymous function:
const squareNums = arr => arr.map(e => e * e)

/ As a function declaration plus using our named function:
function squareNums(arr) {
    return arr.map(toSquare)
}
*/

// No. 7 shoutGreetings()

const shoutGreetings = arr => arr.map(word => word.toUpperCase() + '!');

/*
/ As a function declaration AND using a loop:
function shoutGreetings(arr) {
    let shoutArray = []
    for(let i = 0; i<arr.length; i++){
        shoutArray.push(arr[i].toUpperCase() + '!')
    }
    return shoutArray
}
*/
const greetings = ['hello', 'hi', 'heya', 'oi', 'hey', 'yo']

console.log(shoutGreetings(greetings));

// No. 8 sortYears()

const sortYears = arr => arr.sort((x, y) => y - x);

/*
/ As a function declaration AND using a named function:
function sortYears(arr) {
      const checkYears = (year1, year2) => year2 - year1
      return arr.sort(checkYears)
}
*/

const years = [1970, 1999, 1951, 1982, 1963, 2011, 2018, 1922]

console.log(sortYears(years));

// No. 9 justCoolStuff()

const justCoolStuff = (firstArray, secondArray) => firstArray.filter(item => secondArray.includes(item))

/*
/ As a function declaration AND using named function w/ a loop:
function justCoolStuff(firstArray, secondArray) {
      function isInSecondArray(item){
            for(let i = 0; i<secondArray.length; i++){
                  if (secondArray[i] === item){
                        return true
                  }
            }
            return false 
      }
      return firstArray.filter(isInSecondArray)
}
*/

const coolStuff = ['gameboys', 'skateboards', 'backwards hats', 'fruit-by-the-foot', 'pogs', 'my room', 'temporary tattoos'];

const myStuff = [ 'rules', 'fruit-by-the-foot', 'wedgies', 'sweaters', 'skateboards', 'family-night', 'my room', 'braces', 'the information superhighway']; 

console.log(justCoolStuff(myStuff, coolStuff));

// No. 10 isTheDinnerVegan()

const isTheDinnerVegan = arr => arr.every(food => food.source === 'plant');

/*
/ Alternate solution:
/ Using a function declaration, loop, and helper function:
function isTheDinnerVegan(arr) {
      const isVegan = (food) => {
            if (food.source === 'plant') {
                  return true;
            }
            return false;
      }
      for(let i = 0; i<arr.length; i++){
            if (!isVegan(arr[i])){
                  return false 
            }
      }
      return true
}
*/

const dinner = [{name: 'hamburger', source: 'meat'}, {name: 'cheese', source: 'dairy'}, {name: 'ketchup', source:'plant'}, {name: 'bun', source: 'plant'}, {name: 'dessert twinkies', source:'unknown'}];

console.log(isTheDinnerVegan(dinner));

// No. 11 sortSpeciesByTeeth()

const speciesArray = [ {speciesName:'shark', numTeeth:50}, {speciesName:'dog', numTeeth:42}, {speciesName:'alligator', numTeeth:80}, {speciesName:'human', numTeeth:32}];

const sortSpeciesByTeeth = arr => arr.sort((speciesObj1, speciesObj2) => speciesObj1.numTeeth > speciesObj2.numTeeth)

/*
/ As a function declaration AND using a named function:
function sortSpeciesByTeeth(arr) {
      const compareTeeth = (speciesObj1, speciesObj2) => speciesObj1.numTeeth > speciesObj2.numTeeth
      return arr.sort(compareTeeth)
}
*/

console.log(sortSpeciesByTeeth(speciesArray));

// No. 12 findMyKeys()

const findMyKeys = arr => arr.findIndex(item => item === 'keys')

/*
/ Alternate solution:
/ As a function declaration using a loop:
function findMyKeys(arr) {
      let index = -1;
      for (let i = 0; i < arr.length; i++) {
            if (arr[i] === 'keys') {
                  index = i
                  break
            }
      }
      return index
}
*/
const randomStuff = ['credit card', 'screwdriver', 'receipt', 'gum', 'keys', 'used gum', 'plastic spoon'];

console.log(findMyKeys(randomStuff));

// No. 13 dogFactory()

// Final solution:
const dogFactory = (name, breed, weight) => {
    return {
        _name: name,
        _breed: breed,
        _weight: weight,
        get name() {
            return this._name;
        },
        set name(newName) {
            this._name = newName;
        },
        get breed() {
            return this._breed;
        },
        set breed(newBreed) {
            this._breed = newBreed;
        },
        get weight() {
            return this._weight;
        },
        set weight(newWeight) {
            this._weight = newWeight;
        },
        bark() {
            return 'ruff! ruff!'
        },
        eatTooManyTreats() {
            this._weight++
        }
    }
}

/*
/ Solution to checkpoint 1:
const dogFactory = (name, breed, weight) => {
      return {
            name: name,
            breed: breed,
            weight: weight
      }
}

/ Solution to checkpoint 2:
const dogFactory = (name, breed, weight) => {
      return {
            _name: name,
            _breed: breed,
            _weight: weight,
            get name() {
                  return this._name;
            },
            set name(newName) {
                  this._name = newName;
            },
            get breed() {
                  return this._breed;
            },
            set breed(newBreed) {
                  this._breed = newBreed;
            },
            get weight() {
                  return this._weight;
            },
            set weight(newWeight) {
                  this._weight = newWeight;
            }
      }
}

*/


// JavaScript Practice: Arrays, Loops, Objects, Iterators - PRACTICE

// NO. 1

/*

Write a function factorial() that takes a number as an argument and returns the factorial of the number.

factorial(6); 
/ returns `720` because 6 * 5 * 4 * 3 * 2 * 1 = 720

*/

const factorial = n => {
  let result = 1;
  
  for (let i=n; i>0; i--) {
    result *= i;
  }

  return result;
}


// NO. 2

/*
Write a function subLength() that takes 2 parameters, a string and a single character. The function should search the string for the two occurrences of the character and return the length between them including the 2 characters. If there are less than 2 or more than 2 occurrences of the character the function should return 0.

Examples:

subLength('Saturday', 'a'); // returns 6
subLength('summer', 'm'); // returns 2
subLength('digitize', 'i'); // returns 0
subLength('cheesecake', 'k'); // returns 0
*/


const subLength = (str, char) => {
    let charCount = 0;
    let len = -1;
  
    for (let i = 0; i < str.length; i++) {
        if (str[i] == char) {
            charCount++;
            if (charCount > 2) {
                return 0;
            }
            if (len == -1) {
                len = i;
            } else {
                len = i - len + 1;
            }
        }
    }
    if (charCount < 2) {
        return 0;
    }

    return len;
}

// NO. 3

/*

Write a function groceries() that takes an array of object literals of grocery items. The function should return a string with each item separated by a comma except the last two items should be separated by the word 'and'. Make sure spaces (' ') are inserted where they are appropriate.

Examples:

groceries( [{item: 'Carrots'}, {item: 'Hummus'}, {item: 'Pesto'}, {item: 'Rigatoni'}] );
/ returns 'Carrots, Hummus, Pesto and Rigatoni'

groceries( [{item: 'Bread'}, {item: 'Butter'}] );
/ returns 'Bread and Butter'

groceries( [{item: 'Cheese Balls'}] );
/ returns 'Cheese Balls'

*/

const groceries = list => {
  let listString = ''

  for (let i=0; i<list.length; i++) {
    listString += list[i].item;
    if (i < list.length - 2) {
      listString += ', ';
    } else if (i == list.length - 2){
      listString += ' and ';
    }
  }
  
  return listString;
}