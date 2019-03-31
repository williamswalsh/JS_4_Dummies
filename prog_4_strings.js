var myString = 'JS is fun';
console.log(myString.charAt(6)); // f
console.log(myString.concat('Put me at end.'));
console.log(myString.indexOf('JS')); // 0

myString = 'something,something,something,something'
console.log(myString.split());

console.log(myString.substr(10,9));       // includes,excludes
console.log(myString.substring(10,19));   // includes,excludes


var bool = Boolean(3 > 20);
console.log(bool);

bool = Boolean("3" == "3");
console.log(bool);


var b = true;
if(b==true){
  alert("Equal");
}else{
  alert("Not equal");
}

// undefined var has value some special value undefined
// undefined isn't a string
var c;
console.log(c == "undefined");
