// Assignment code here
// Create variables containing the components of the password
// Numbers
const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
// Symbols
const symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
// Lowercase Characters
const lowercaseCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
// Uppercase Characters
const uppercaseCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
// The potential results = combination of numbers, symbols, and upper/lowercase characters
let potentialResults = [];
// Prompts for the user to select password options = upper, lower, numbers, symbols and length
// Length of password
numberOfCharacters = prompt("Select a number of characters between 8 and 128.");
if (numberOfCharacters < 8 || numberOfCharacters > 128) {
  // If less than 8 or greater than 128
  return "Please choose a valid number of characters.";
} else if (isNaN(numberOfCharacters)) {
  // If not a number
  numberOfCharacters = prompt("Please enter a valid number.");
} else {
  // Final prompt for length of password
  alert("Your password will be " + numberOfCharacters + " characters long.");
}
// Use lowercase characters
hasLowercase = confirm(
  "Would you like your password to contain lowercase characters?"
);
if (hasLowercase) {
  // Yes
  let turnToLowercase = alert(
    "Your password will contain lowercase characters."
  );
} else {
  // No
  alert("Your password will NOT contain lowercase characters.");
}
// Use uppercase characters
hasLowercase = confirm(
  "Would you like your password to contain lowercase characters?"
);
if (hasLowercase) {
  // Yes
  let turnToLowercase = alert(
    "Your password will contain lowercase characters."
  );
} else {
  // No
  alert("Your password will NOT contain lowercase characters.");
}
// Use numbers
hasNumbers = confirm("Would you like your password to contain numbers?");
if (hasNumbers) {
  // Yes
  alert("Your password will contain numbers.");
} else {
  // No
  alert("Your password will NOT contain numbers.");
}
// Use special characters aka symbols
hasSpecial = confirm(
  "Would you like your password to contain special characters?"
);
if (hasSpecial) {
  alert("Your password will contain special characters.");
} else {
  alert("Your password will NOT contain special characters.");
}
// If user does not select any character options
if (
  hasLowercase === false &&
  hasUppercase === false &&
  hasNumbers === false &&
  hasSpecial === false
) {
  return "Please select at least one character type.";
}



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
