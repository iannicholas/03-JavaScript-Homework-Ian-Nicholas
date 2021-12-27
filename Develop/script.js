// global variable grabbing id selector instance
var generateBtn = document.querySelector("#generate");
// write password to the #password input
function writePassword() {
  var password = generatePassword(); 
  function generatePassword() {
    // define variables
    var passwordText = document.querySelector("#password");
    var caps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lows = "abcdefghijklmnopqrstuvwxyz";
    var num = "0123456789";
    var spec = "}{_-~!:?)(+=_';|/><@%^&$";
    var chars = "";
    var characters = prompt("Enter length of password between 8 and 128 characters.");
    var capitols = prompt("How many Capitol Letters?");
    var numbers = prompt("How many Numbers?");
    var special = prompt("How many Special Characters?");
    var lower = characters - capitols - numbers - special;
    // validates user inputs
    if (isNaN(characters) || isNaN(capitols) || isNaN(numbers) || isNaN(special) || characters < 8 || characters > 128) {
      alert("All entries must be numeric and in between 8 and 128.");
      return generatePassword();
    } else {
      // loops through each input array and finds random characters defined by user input length
      for (var i = 1; i <= capitols; i++) {
        chars += caps.charAt(Math.floor(Math.random() * caps.length));
      }
      for (var i = 1; i <= numbers; i++) {
        chars += num.charAt(Math.floor(Math.random() * num.length));
      }
      for (var i = 1; i <= special; i++) {
        chars += spec.charAt(Math.floor(Math.random() * spec.length));
      }
      for (var i = 1; i <= lower; i++) {
        chars += lows.charAt(Math.floor(Math.random() * lows.length));
      }
      // splits characters
      var random = chars.split("");
      // sorts the characters randomly vice top to bottom code
      random.sort(function(a){return 0.5 - Math.random()});
      // puts back together 
      var password = random.join(""); 
      // assigns generated pass word to #password 
      passwordText.value = password;
    }
  }
} 
// add event listener to generate button
generateBtn.addEventListener("click", writePassword);