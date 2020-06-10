// Assignment code here

var lettersLower = "abcdefghijklmnopqrstuvwxyz";
var lettersUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var number = "0123456789";
var symbol = "!@#$%^&*()_+~`|}{[]\:;?><,./-=";


function generatePassword() {
  var characters = "";
  var result = "";

  var numlength = prompt("How many characters would you like your password to be?");

  if(numlength < 8 || numlength > 128) {
    alert("Your password must have at least 8 characters or a maximun of 128.");
  }
  else {

    var confirmLower = window.confirm("Would you like your password to have lower case characters?");
    if (confirmLower){
      characters += lettersLower
    }
    var confirmUpper = window.confirm("Would you like your password to have upper case characters?");
    if (confirmUpper){
      characters += lettersUpper
    }
    var confirmNumber = window.confirm("Would you like your password to have numbers?");
    if (confirmNumber){
      characters += number
    }
    var confirmSymbol= window.confirm("Would you like your password to have special characters?");
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

// generatePassword()


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
