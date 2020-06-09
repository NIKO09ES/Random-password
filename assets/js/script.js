// Assignment code here
// I take some references to DariaNau/password-generator-js

var lettersLower = "abcdefghijklmnopqrstuvwxyz";
var lettersUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var number = "0123456789";
var symbol = "!@#$%^&*()_+~`|}{[]\:;?><,./-=";


function generatePassword() {
  var characters = "";
  var result = "";

  var numlength = prompt("How many characters would you like your pasword to be?");

  if(numlength < 8 || numlength > 128) {
    alert("Your password must be at least 8 characters.");
  }
  else {

    var confirmLower = window.confirm("lower characters");
    if (confirmLower){
      characters += lettersLower
    }
    var confirmUpper = window.confirm("Upper characters");
    if (confirmUpper){
      characters += lettersUpper
    }
    var confirmNumber = window.confirm("Numbers");
    if (confirmNumber){
      characters += number
    }
    var confirmSymbol= window.confirm("Symbol");
    if (confirmSymbol){
      characters += symbol
    }
    if (!confirmUpper && !confirmLower && !confirmNumber && !confirmSymbol) {
      alert('you must choose at least one')
      generatePassword()
    }
    for(var i=0; i<numlength; i++){
      var random = Math.floor(Math.random()* characters.length);
      result += characters[random];
    }
    return result;
  }
}

generatePassword()


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
