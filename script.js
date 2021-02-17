// Assignment Code
var generateBtn = document.querySelector("#generate");


var charUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var charLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var charNumber = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var charSpecial = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", ";", ":", ",", ".", "/", "?"];




// Write password to the #password input
function writePassword() {
  window.alert("You have selected to generate a password. Please answer the following criteria:");
    // Prompt user for Character count
      // password must be 8-128 characters
    var userPasswordLength = window.prompt("Please select a password length. The password must be between 8 & 128 characters:");
      if (userPasswordLength < 8 || userPasswordLength > 128) {
       return writePassword();
      }
    
    // prompt user for Uppercase letters  
    var userCharUpper = window.confirm("Would you like your password to contain uppercase letters?");
      if (userCharUpper) {
        console.log("confirm: Uppercase");
        var userCharUpper = charUpper;
        // return userCharUpper;
      }
      else {
        return !userCharUpper;
      }

      var upperIndex = Math.floor(Math.random() * userCharUpper.length);

    // prompt user for lowercase letters
    var userCharLower = window.confirm("Would you like your password to contain lowercase letters?");
      if (userCharLower) {
        console.log("confirm: Lowercase");
        var userCharLower = charLower;
        // return userCharLower;
      }
      else {
        return !userCharLower;
      }

      var lowerIndex = Math.floor(Math.random() * userCharLower.length);

    // prompt user for numeric characters
    var userCharNumber = window.confirm("Would you like your password to contain Numbers?");
      if (userCharNumber) {
        console.log("confirm: Numbers");
        var userCharNumber = charNumber;
        // return userCharNumber;
      }
      else {
        return !userCharNumber;
      }

      var numberIndex = Math.floor(Math.random() * userCharNumber);

    // prompt user for special characters 
    var userCharSpecial = window.confirm("Would you like your password to contain special characters?");
      if (userCharSpecial) {
        console.log("confirm: Special Characters");
        var userCharSpecial = charSpecial;
        // return userCharSpecial;
      }
      else {
        return !userCharSpecial;
      }

      var specialIndex = Math.floor(Math.random() * userCharSpecial.length);



      
  function generatePassword() {
    for (i = 0; i < userPasswordLength; i++) {
        console.log("we in there");
    }
  }



  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




