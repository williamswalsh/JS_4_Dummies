// "use strict";
//x = 3.14;
console.log("Equality Operator:");
console.log(3 == "3");

console.log("Strict Equality Operator - No type conversion:");
console.log(3 === "3");

var arr = [ "a", "b", "c", "d"];
console.log(arr);

delete arr[3];    // Element becomes empty - Empty arry index value

console.log(arr);

if ( 2 in arr){
  console.log("3rd element" + " is present!");
}

var str = "My special string";

if ( str instanceof String){
  console.log("Yes this is a string.");
}
// Callback -
var a = function(){console.log("pippo");};

a();
