// Assignment Code
var generateBtn = document.querySelector("#generate");

// Declaring possible characters for password
var charUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var charLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var charNumber = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var charSpecial = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", ";", ":", ",", ".", "/", "?"];


// Function to gather user input
function userPasswordOptions() {

  window.alert("You have selected to generate a password. Please answer the following criteria:");
  // Prompt user for Character count
  // password must be 8-128 characters & a number
  var userPasswordLength = window.prompt("Please select a password length. The password must be between 8 & 128 characters:");
  if (isNaN(userPasswordLength) === true) {
    window.alert("Your password length must be declared as a number");
    return false;
  }
  else if (userPasswordLength < 8 || userPasswordLength > 128) {
    window.alert("The password must be between 8 and 128 characters");
    return false;
  }

  // prompt user for Uppercase letters  
  var userCharUpper = window.confirm("Would you like your password to contain uppercase letters?");

  // prompt user for lowercase letters
  var userCharLower = window.confirm("Would you like your password to contain lowercase letters?");

  // prompt user for numeric characters
  var userCharNumber = window.confirm("Would you like your password to contain Numbers?");

  // prompt user for special characters 
  var userCharSpecial = window.confirm("Would you like your password to contain special characters?");

  // Check if user included any variables
  if (userCharUpper === false && userCharLower === false && userCharNumber === false && userCharSpecial === false) {
    window.alert("You must select at least one character type.");
    return false;
  }
  // Final object to be returned when function ran
  var userChoicesObject = {
    passLength: userPasswordLength,
    upper: userCharUpper,
    lower: userCharLower,
    number: userCharNumber,
    special: userCharSpecial
  };
  // push object out to global scope, returned as values userChoices
  return userChoicesObject;
}

// Function that will pull a random element from an array
function getRandomElement(characterArrays) {
  var randomIndex = Math.floor(Math.random() * characterArrays.length);
  var randomElement = characterArrays[randomIndex];
  return randomElement;
}

// Function to generate password based on length provided and random elements pulled from Arrays
function generatePassword() {
  // Call the password options function to obtain user input, user input is the saved in the variable userChoices
  var userChoices = userPasswordOptions();

  //  Array to hold final password
  var result = [];

  // Array that will hold the every possible charcter the user has selected
  var possibleCharacters = [];

  // Array that will hold the randomly generated 
  var requiredCharacters = [];

  // If statement to check if user selected Uppercase characters
  // Generates the entire array to possible characters array and a random character to the required characters array
  if (userChoices.upper) {
    possibleCharacters.push(...charUpper);
    var upperCharacters = getRandomElement(charUpper);
    requiredCharacters.push(upperCharacters);
  }
  // If statement to check if user selected lowercase characters
  if (userChoices.lower) {
    possibleCharacters.push(...charLower);
    var lowerCharacters = getRandomElement(charLower);
    requiredCharacters.push(lowerCharacters);
  }
  // If statement to check if user selected numbers
  if (userChoices.number) {
    possibleCharacters.push(...charNumber);
    var numberCharacters = getRandomElement(charNumber);
    requiredCharacters.push(numberCharacters);
  }
  // If statement to check if user selected special characters
  if (userChoices.special) {
    possibleCharacters.push(...charSpecial);
    var specialCharacters = getRandomElement(charSpecial);
    requiredCharacters.push(specialCharacters);
  }

  // for loop that pulls a random character from the list of possible choices for the specified length of password
  for (i = 0; i < userChoices.passLength; i++) {
    var possiblecharacter = getRandomElement(possibleCharacters);
    result.push(possiblecharacter);
  }

  // Overwrite the first characters with the required charcters selected
  for (i = 0; i < requiredCharacters.length; i++){
    result[i] = requiredCharacters[i];
  }
  // return the password as a concatenated string
  return result.join("");
}

// After generate button is clicked, write password function is ran
  // which contains generate password function
    // which contains user options function
// password generated as result is stored in password var 
// password display location on html is linked with #password id
// the display location variables value is then changed to the value of password
function writePassword() {


  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





