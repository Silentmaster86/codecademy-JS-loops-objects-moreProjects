// creating object literals

/* Objects can be assigned to variables just like any JavaScript type. We use curly braces, {}, to designate an object literal:

let spaceship = {}; - spaceship is an empty object

We fill an object with unordered data. This data is organized into key-value pairs. A key is like a variable name that points to a location in memory that holds a value.

A key’s value can be of any data type in the language including functions or other objects.

We make a key-value pair by writing the key’s name, or identifier, followed by a colon and then the value. We separate each key-value pair in an object literal with a comma (,). Keys are strings, but when we have a key that does not have any special characters in it, JavaScript allows us to omit the quotation marks.
*/

// fasterShip

let fasterShip = {
  'Fuel Type': 'Turbo Fuel',
  color: 'silver'
};

// Accessing Properties

/*
There are two ways we can access an object’s property.

The first way — dot notation, '.'.
'hello'.length;
spaceship.homePlanet; - Returns 'Earth',
spaceship.color; - Returns 'silver' - "spaceship" - object; "color" - property name; "." - dot operator
*/

let spaceship = {
  homePlanet: 'Earth',
  color: 'silver',
  'Fuel Type': 'Turbo Fuel',
  numCrew: 5,
  flightPath: ['Venus', 'Mars', 'Saturn']
};

let crewCount = spaceship.numCrew;
let planetArray = spaceship.flightPath;

// Bracket Notation

// The second way to access a key’s value is by using bracket notation, [ ].

//['A', 'B', 'C'][0]; - Returns 'A'

// We must use bracket notation when accessing keys that have numbers, spaces, or special characters in them. Without bracket notation in these situations, our code would throw an error.

/*
let spaceship = {
  'Fuel Type': 'Turbo Fuel',
  'Active Duty': true,
  homePlanet: 'Earth',
  numCrew: 5
};

spaceship['Active Duty'];   // Returns true
spaceship['Fuel Type'];   // Returns  'Turbo Fuel'
spaceship['numCrew'];   // Returns 5
spaceship['!!!!!!!!!!!!!!!'];   // Returns undefined

let returnAnyProp = (objectName, propName) => objectName[propName];
 
returnAnyProp(spaceship, 'homePlanet'); // Returns 'Earth'

*/


let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  'Active Mission' : true,
  homePlanet : 'Earth', 
  numCrew: 5
 };

let propName = 'Active Mission';

let isActive = spaceship['Active Mission'];

console.log(spaceship['Active Mission']);

// Property Assignment

/* 
Once we’ve defined an object, we’re not stuck with all the properties we wrote. 
Objects are mutable meaning we can update them after we create them!

We can use either dot notation, '.', or bracket notation, '[]', and the assignment operator, '=' to add new key-value pairs to an object or change an existing property.

One of two things can happen with property assignment:

1. If the property already exists on the object, whatever value it held before will be replaced with the newly assigned value.
2. If there was no property with that name, a new property will be added to the object.

It’s important to know that although we can’t reassign an object declared with const, we can still mutate it, meaning we can add new properties and change the properties that are there.

const spaceship = {type: 'shuttle'};
spaceship = {type: 'alien'}; // TypeError: Assignment to constant variable.
spaceship.type = 'alien'; // Changes the value of the type property
spaceship.speed = 'Mach 5'; // Creates a new key of 'speed' with a value of 'Mach 5'

*/
/*
spaceship['Fuel Type'] = 'vegetable oil';
spaceship.color = 'gold';

"spaceship" object; "['Fuel Type'], color" - property name; "=" - assignment operator; "'vegetable oil', 'gold'" - value

*/

/*
You can delete a property from an object with the delete operator.

const spaceship = {
  'Fuel Type': 'Turbo Fuel',
  homePlanet: 'Earth',
  mission: 'Explore the universe' 
};
 
delete spaceship.mission;  // Removes the mission property

*/

let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth',
  color: 'silver',
  'Secret Mission' : 'Discover life outside of Earth.'
};

spaceship['color'] = 'glorious gold';
spaceship.color = 'glorious gold';

spaceship.numEngines = 10;

console.log(spaceship);

delete spaceship['Secret Mission'];

console.log(spaceship);

// Methods

/*When the data stored on an object is a function we call that a method. A property is what an object has, while a method is what an object does.

Do object methods seem familiar? That’s because you’ve been using them all along! For example console is a global JavaScript object and .log() is a method on that object. Math is also a global JavaScript object and .floor() is a method on it.

We can include methods in our object literals by creating ordinary, colon-separated key-value pairs. The key serves as our method’s name, while the value is an anonymous function expression.

const alienShip = {
  invade: function () { 
    console.log('Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.')
  }
};

With the new method syntax introduced in ES6 we can omit the colon and the function keyword

const alienShip = {
  invade () { 
    console.log('Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.')
  }
};

Object methods are invoked by appending the object’s name with the dot operator followed by the method name and parentheses:

alienShip.invade(); // Prints 'Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.'

*/

let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

const alienShip = {
  retreat () {
    console.log(retreatMessage);
  },
  takeOff () {
    console.log('Spim... Borp... Glix... Blastoff!')
  }
};

alienShip.retreat();
alienShip.takeOff();

// Nested Objects

/*

In application code, objects are often nested— an object might have another object as a property which in turn could have a property that’s an array of even more objects!

In our spaceship object, we want a crew object. This will contain all the crew members who do important work on the craft. Each of those crew members are objects themselves. They have properties like name, and degree, and they each have unique 
Preview: Docs Loading link description
methods
 based on their roles. We can also nest other objects in the spaceship such as a telescope or nest details about the spaceship’s computers inside a parent nanoelectronics object.

*/

/*

const spaceship = {
     telescope: {
        yearBuilt: 2018,
        model: '91031-XLT',
        focalLength: 2032 
     },
    crew: {
        captain: { 
            name: 'Sandra', 
            degree: 'Computer Engineering', 
            encourageTeam() { console.log('We got this!') } 
         }
    },
    engine: {
        model: 'Nimbus2000'
     },
     nanoelectronics: {
         computer: {
            terabytes: 100,
            monitors: 'HD'
         },
        'back-up': {
           battery: 'Lithium',
           terabytes: 50
         }
    }
};

*/

/*

We can chain operators to access nested properties. We’ll have to pay attention to which operator makes sense to use in each layer. It can be helpful to pretend you are the computer and evaluate each expression from left to right so that each operation starts to feel a little more manageable.

spaceship.nanoelectronics['back-up'].battery; // Returns 'Lithium'

In the preceding code:

1. First the computer evaluates spaceship.nanoelectronics, which results in an object containing the back-up and computer 1. objects.
2. We accessed the back-up object by appending ['back-up'].
3. The back-up object has a battery property, accessed with .battery which returned the value stored there: 'Lithium'

*/

let spaceship = {
  passengers: [{
    passengersName: 'John'
  }],
  telescope: {
    yearBuilt: 2018,
    model: "91031-XLT",
    focalLength: 2032 
  },
  crew: {
    captain: { 
      name: 'Sandra', 
      degree: 'Computer Engineering', 
      encourageTeam() { console.log('We got this!') },
     'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
  },
  engine: {
    model: "Nimbus2000"
  },
  nanoelectronics: {
    computer: {
      terabytes: 100,
      monitors: "HD"
    },
    'back-up': {
      battery: "Lithium",
      terabytes: 50
    }
  }
}; 
let capFave = spaceship.crew.captain['favorite foods'][0]
let firstPassenger = spaceship.passengers[0]