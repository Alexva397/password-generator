// Assignment Code
var generateBtn = document.querySelector("#generate");

// Declaring possible characters for password
var charUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var charLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var charNumber = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var charSpecial = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", ";", ":", ",", ".", "/", "?"];

function userPasswordOptions() {
  window.alert("You have selected to generate a password. Please answer the following criteria:");
  // Prompt user for Character count
  // password must be 8-128 characters & a number
  var userPasswordLength = window.prompt("Please select a password length. The password must be between 8 & 128 characters:");
  if (isNaN(userPasswordLength) === true) {
    window.alert("Your password length must be declared as a number");
    return;
  }
  else if (userPasswordLength < 8 || userPasswordLength > 128) {
    window.alert("The password must be between 8 and 128 characters");
    return;
  }

  // prompt user for Uppercase letters  
  var userCharUpper = window.confirm("Would you like your password to contain uppercase letters?");
  if (userCharUpper) {
    console.log("confirm: Uppercase");
  }

  // prompt user for lowercase letters
  var userCharLower = window.confirm("Would you like your password to contain lowercase letters?");
  if (userCharLower) {
    console.log("confirm: Lowercase");
  }

  // prompt user for numeric characters
  var userCharNumber = window.confirm("Would you like your password to contain Numbers?");
  if (userCharNumber) {
    console.log("confirm: Numbers");
  }

  // prompt user for special characters 
  var userCharSpecial = window.confirm("Would you like your password to contain special characters?");
  if (userCharSpecial) {
    console.log("confirm: Special Characters");
  }

  // Check if user included any variables
  if (userCharUpper === false && userCharLower === false && userCharNumber === false && userCharSpecial === false) {
    window.alert("You must select at least one character type.");
    return;
  }
  // Final object to be returned when function ran
  var userCoicesObject = {
    passLength: userPasswordLength,
    upper: userCharUpper,
    lower: userCharLower,
    number: userCharNumber,
    special: userCharSpecial
  };

  return userCoicesObject;
}

// Function that will pull a random element from an array
function getRandomElement(characterArrays) {
  var randomIndex = Math.floor(Math.random() * characterArrays.length);
  var randomElement = characterArrays[Math.floor(Math.random() * randomIndex)];
  return randomElement;
}

// Function to generate password based on length provided and random elements pulled from Arrays
function generatePassword() {

  var userCoices = userPasswordOptions();

  var result = [];

  var possibleCharacters = [];

  var requiredCharacters = [];

  // If statement to check if user selected Uppercase characters
  // Generates the entire array to possible characters array and a random character to the required characters array
  if (userCoices.upper) {
    possibleCharacters.push(...charUpper);
    var upperCharacters = getRandomElement(charUpper);
    requiredCharacters.push(upperCharacters);
  }
  // If statement to check if user selected lowercase characters
  if (userCoices.lower) {
    possibleCharacters.push(...charLower);
    var lowerCharacters = getRandomElement(charLower);
    requiredCharacters.push(lowerCharacters);
  }
  // If statement to check if user selected numbers
  if (userCoices.number) {
    possibleCharacters.push(...charNumber);
    var numberCharacters = getRandomElement(charNumber);
    requiredCharacters.push(numberCharacters);
  }
  // If statement to check if user selected special characters
  if (userCoices.special) {
    possibleCharacters.push(...charSpecial);
    var specialCharacters = getRandomElement(charSpecial);
    requiredCharacters.push(specialCharacters);
  }

  for (i = 0; i < userCoices.passLength; i++) {
    var possiblecharacter = getRandomElement(possibleCharacters);
    result.push(possiblecharacter);
  }

  for (i = 0; i < requiredCharacters.length; i++){
    result[i] = requiredCharacters[i];
  }



  console.log(userCoices);
  console.log(upperCharacters);
  console.log(lowerCharacters);
  console.log(numberCharacters);
  console.log(specialCharacters); 
  console.log(possibleCharacters);
  console.log(requiredCharacters);
  console.log(result);

  return result.join("");
}


// Write password to the #password input
function writePassword() {

  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);






