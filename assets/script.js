
var upperAlpha = 'ABCDEFGHIJKLMNOPQRESTUVWXYZ';
var lowerAlpha = 'abcdefghijklmnopqrstuvwxyz';
var number = '1234567890';
var symbols = '!@#$%^&*()_+';

// Assignment Code
var generateBtn = document.querySelector("#generate");

function charSetSetter(isUpper, isLower, isNumber, isSymbols){
  var usableChar = []
  if (isUpper) {
    usableChar.push(upperAlpha);
  }
  if (isLower) {
    usableChar.push(lowerAlpha);
  }
  if (isNumber){
    usableChar.push(number);
  }
  if (isSymbols) {
    usableChar.push(symbols);
  }
  return usableChar;
}

function randomIndexGen(data) {
  var randomIdx = Math.floor(Math.random() * data.length);
  return randomIdx;
}

function generatePassword(usedCharectors, length) {
  var password = "";
  for (var i =0; i < length; i++) {
    var charectorSetIndex = randomIndexGen(usedCharectors);
    var charectorIndex = (randomIndexGen(usedCharectors[charectorSetIndex]));
    password += usedCharectors[charectorSetIndex][charectorIndex]
  }
  var passwordText = document.querySelector("#password")
  passwordText.value = password;
}

// Write password to the #password input
function writePassword() {
  var length = window.prompt("Enter a number from 8 to 128 for password length.");
  var isUpper = window.confirm("Would you like to use Upper Alpha characters?");
  var isLower = window.confirm("Would you like to use Lower Alpha characters?");
  var isNumber = window.confirm("Would you like to use numbers?");
  var isSymbols = window.confirm("Would you like to use special characters?");
 
  var usableChars = charSetSetter(isUpper, isLower, isNumber, isSymbols);
  generatePassword(usableChars, length);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);