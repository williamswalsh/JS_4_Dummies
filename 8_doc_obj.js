for(var prop in document){
  //document.write(prop + ": " + document[prop]);
}

// document.images - Records the number of image tags in document.

function welcome( yourName ){
  if( typeof yourName === 'undefined'){
    yourName = "defaultName - John Doe";
  }
  return yourName;
}

// Equivalent function with default variable value
function welcome( yourName = "John Doe"){
  return yourName;
}

console.log(welcome());
console.log(welcome("Michael"));
