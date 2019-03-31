var guitar = {
  bodyColor: "Yellow",
  numberOfStrings: 6,
  brand: "Yamaha",
  body: "Hollowed Timber",
  strum: function(){console.log("Strumming")},
  tune: function(){console.log("Tuning")}
};

guitar.tune();
guitar.strum();

var personObj = {};
personObj.eyes="Brown";
personObj.hair="Brown";

console.log(personObj["eyes"]);


var car = {
  hasAlloys:"",
  make:"",
  model:""
};

function configureCar(){
  var userInput;

  for(var property in car){
    if(car.hasOwnProperty(property)){
      userInput = prompt("Enter a value for: "+ property);
      car[property]=userInput;
    }
  }
}

function getCarConfig(){
  for(var prop in car){
    document.write(prop + ": " + car[prop] + "<br>");
  }
}

configureCar();
getCarConfig();

delete car.hasAlloys;

getCarConfig();
