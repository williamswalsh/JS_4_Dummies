// JS code file doesn't contain any html elements i.e. <script>
// Can use relative or absolute path to refer to this java-script
function countToTen(){
  var c=0;

  //var a = prompt("Enter 1st number:");
  //var b = prompt("Enter 2nd number:");
  //var total = Number(a) + Number(b);
  // Halts/breaks program - alert(unreferenced variable);

  alert("\' \"  \\ ");
  alert("Newline:\n");
  alert("Carraige Return:\r");
  alert("Tab:\t");
  alert("Backspace:\b");
  alert("Form feed:\f");
  alert(Number("42") + " " +  Number(42) + " " + Number("eggs")
        + " " + parseInt(23.2342) + " " + parseFloat(100.0034));
  alert("12" + 12);
  alert(12 + "12");
  alert("12" * 2);


  while(c<100){
    c++;
    document.getElementById("count").innerHTML += c + "<br>";
  }
}
