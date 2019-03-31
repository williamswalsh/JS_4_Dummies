// Object constructor
function Person(){
  this.eyes = 2;
  this.hands = 2;
  this.legs = 2;
  this.feet = 2;
}

var jiafan = new Person();
console.log(jiafan.eyes);


// Add properties to an object applies to all sub/child objects (inheritance)
Person.prototype.knees=2;
console.log("Jiafan has " + jiafan.knees + " knees.");


// Object Definition ? Constructor ?? Initialisation
var Spider = {
  legs:8
}

var pippo = Object.create(Spider);
console.log(pippo.legs);
