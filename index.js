// 👇 COMPLETE YOUR WORK BELOW 👇
/* ❗❗ NOTE: PLEASE USE INDIVIDUAL KEYS FOR YOUR CONSTRUCTOR PARAMETERS, NOT OBJECTS. THE TESTS WILL NOT PASS WITH OBJECTS. ❗❗  */

/*
  TASK 1
    - Write a Person Constructor that initializes `name` and `age` from arguments.
    - All instances of Person should initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + .eat() should recieve a string as a parameter and take some type of edible as an argument
        + When eating an edible, it should be pushed into the `stomach` array.
        + The `eat` method should have no effect if there are 10 items in the `stomach` array.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` array should be empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.stomach = [];
}

Person.prototype.eat = function(food) {
  if (this.stomach.length < 10) {
    this.stomach.push(food);
    console.log(`${this.name} ate ${food}`);
  } else {
    console.log(`${this.name}'s stomach is full`);
  }
};

Person.prototype.poop = function() {
  this.stomach = [];
  console.log(`${this.name} pooped`);
};

Person.prototype.toString = function() {
  return `${this.name}, ${this.age}`;
};


/*
  TASK 2
    - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with an `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method
      + should take 'gallons' as an parameter which will take number of gallons as an argument
      + should add the gallons to `tank`.
    - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/

class Car {
  constructor(model, milesPerGallon) {
    this.model = model;
    this.milesPerGallon = milesPerGallon;
    this.tank = 0;
    this.odometer = 0;
  }
  
  fill(gallons) {
    this.tank += gallons;
  }
  
  drive(distance) {
    const maxDistance = this.tank * this.milesPerGallon;
    if (distance <= maxDistance) {
      this.odometer += distance;
      this.tank -= distance / this.milesPerGallon;
    } else {
      this.odometer += maxDistance;
      this.tank = 0;
      return `I ran out of fuel at ${this.odometer} miles!`;
    }
  }
}



/*
  TASK 3
    - Write a Baby constructor subclassing Person.
    - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies also have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/

class Baby extends Person {
  constructor(name, age, favoriteToy = "ball") {
    super(name, age);
    this.favoriteToy = favoriteToy;
  }
  
  play() {
    return `Playing with ${this.favoriteToy}`;
  }
}


/* 
  TASK 4
  In your own words explain the four principles for the "this" keyword below:
1. Global Binding: When this is used outside of any function or object, it refers to the global object, which is window in browsers and global in Node.js. This is the default binding of this and is generally not recommended to use in most cases.

2. Implicit Binding: When this is used inside a method of an object, it refers to the object that the method is called on. The this keyword is implicitly bound to the object.

3. Explicit Binding: When this is used with call(), apply(), or bind(), it refers to the object passed as the first argument to these methods. This allows you to explicitly bind the this keyword to a specific object.

4. New Binding: When this is used inside a constructor function, it refers to the object that is being created by the constructor function. The this keyword is used to create and initialize properties on the new object.
*/

///////// END OF CHALLENGE /////////

/* 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 */
function foo(){
  console.log('its working!');
  return 'bar';
}
foo();
module.exports = {
  foo,
  Person, 
  Car,
  Baby
}
