//////////////////////////////////////////////////////////////////////
//Name : Hendy                                                      //
//From :Another Planet                                             //
/////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////
//soal 1: Create a Basic JavaScript Object                  //
/////////////////////////////////////////////////////////////
let dog = {
    name: "Aflac",
    numLegs: 2
};

///////////////////////////////////////////////////////////////////
//soal 2:Use Dot Notation to Access the Properties of an Object //
/////////////////////////////////////////////////////////////////
let dog = {
    name: "Spot",
    numLegs: 4
  };
  // Add your code below this line
  console.log(dog.name);
  console.log(dog.numLegs);

//////////////////////////////////////////////////////////////
//soal 3:Create a Method on an Object                      //
////////////////////////////////////////////////////////////
let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function() {
      return "This dog has " + dog.numLegs + " legs.";
    }
  };
  
  dog.sayLegs();

/////////////////////////////////////////////////////////////
//soal 4 : Make Code More Reusable with the this Keyword  //
///////////////////////////////////////////////////////////
let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function() {
      return "This dog has " + this.numLegs + " legs.";
    }
  };
  
  dog.sayLegs();

//////////////////////////////////////////////////////////////
//soal 5 : Define a Constructor Function                   //
////////////////////////////////////////////////////////////
function Dog() {
    this.name = "Dogie";
    this.color = "black";
    this.numLegs = 2;
  }

///////////////////////////////////////////////////////////
//soal 6:Use a Constructor to Create Objects             //
//////////////////////////////////////////////////////////
function Dog() {
    this.name = "Rupert";
    this.color = "brown";
    this.numLegs = 4;
  }
  let hound = new Dog();

//////////////////////////////////////////////////////////
//soal 7 :Extend Constructors to Receive Arguments      //
/////////////////////////////////////////////////////////
function Dog(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 4;
  }
  let terrier = new Dog("George", "White");

/////////////////////////////////////////////////////////////
//soal 8 : Verify an Object's Constructor with instanceof //
///////////////////////////////////////////////////////////
function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}
let myHouse = new House(5);
myHouse instanceof House;

////////////////////////////////////////////////////////////
//soal 9 : Understand Own Properties                     //
//////////////////////////////////////////////////////////
function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}
let canary = new Bird("Tweety");
let ownProps = [];
for (let property in canary) {
  if (canary.hasOwnProperty(property)) {
    ownProps.push(property);
  }
}

/////////////////////////////////////////////////////////////////
//soal 10: Use Prototype Properties to Reduce Duplicate Code  //
///////////////////////////////////////////////////////////////
function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;
let beagle = new Dog("Snoopy");

/////////////////////////////////////////////////////////////
//soal 11 : Iterate Over All Properties                   //
///////////////////////////////////////////////////////////
function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];

for (let property in beagle) {
  if (Dog.hasOwnProperty(property)) {
    ownProps.push(property);
  } else {
    prototypeProps.push(property);
  }
}

//////////////////////////////////////////////////////////////
//soal 12 : Understand the Constructor Property            //
////////////////////////////////////////////////////////////
function Dog(name) {
  this.name = name;
}

function joinDogFraternity(candidate) {
  if (candidate.constructor === Dog) {
    return true;
  } else {
    return false;
  }
}

//////////////////////////////////////////////////////////////
//soal 13: Change the Prototype to a New Object            //
////////////////////////////////////////////////////////////
function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  numLegs: 2,
  eat() {
    console.log("nom nom nom");
  },
  describe() {
    console.log("My name is " + this.name);
  }
};

///////////////////////////////////////////////////////////////////////////////////
//soal 14 :Remember to Set the Constructor Property when Changing the Prototype //
/////////////////////////////////////////////////////////////////////////////////
function Dog(name) {
  this.name = name;
}
Dog.prototype = {

  numLegs: 4,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};

//little experiment
function Dog(name) {
  this.name = name;
}
Dog.prototype = {
  constructor: Dog, // Solution

  numLegs: 2,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};

/////////////////////////////////////////////////////////////////////////
//soal 15:Understand Where an Object’s Prototype Comes From           //
///////////////////////////////////////////////////////////////////////
function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");
Dog.prototype.isPrototypeOf(beagle);

/////////////////////////////////////////////////////////////////////////
//soal 16:Understand the Prototype Chain                              //
///////////////////////////////////////////////////////////////////////
function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");

Dog.prototype.isPrototypeOf(beagle);
Object.prototype.isPrototypeOf(Dog.prototype);

///////////////////////////////////////////////////////////////////////
//soal 17 : Use Inheritance So You Don't Repeat Yourself            //
/////////////////////////////////////////////////////////////////////
