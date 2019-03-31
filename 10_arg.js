function getNamedWelcome(){
  var welcome = "Welcome, ";

  for(name in arguments){
    welcome += arguments[name];
    welcome += " ";
  }
  return welcome;
}

console.log(getNamedWelcome("John", "Willy", "Billy", "Walsh"));

var methodReference = function(){
  console.log("Hello World");
  console.log("Hello World AGAIN!");
}

console.log(methodReference);  // Prints method as string
console.log(methodReference());// calls method note brackets ()

count = 0;
function squareIt(baseNumber){
  count++;
  if ( (typeof baseNumber != 'number') || (baseNumber <= 0 ) ){
    return -1;
  }
  var square = baseNumber * baseNumber;

  if( square > 1000000 ){
    console.log(square);
  }else{
    squareIt(square);
  }
}

squareIt(3);
console.log("Loops:" + count);
