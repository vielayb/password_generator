// Assignment Code
var lower = "abcdefghijklmnopqrstuvwxyz"
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var number = "0123456789"
var special = "!@#$%^&*()[]{}"


var lowerRandom = function() {
  return lower[Math.floor(Math.random() * lower.length)];
}
var upperRandom = function() {
  return upper[Math.floor(Math.random() * upper.length)];
}
var numberRandom = function() {
  return number[Math.floor(Math.random() * number.length)]
}
var specialRandom = function() {
  return special[Math.floor(Math.random() * special.length)]
}


//promts and 
var generateBtn = document.querySelector("#generate");
function generatePassword(){
  var userLength = prompt("How long do you want your password? 8 - 128")
    if (userLength < 8 || userLength > 128){
      window.alert("Please enter a number between 8 and 128");
    }
  
  var lowerConfirm = confirm("Do you want to use lowercase characters")
    if (lowerConfirm ===0){
      return "";
    }

  var upperConfirm = confirm("Do you want to use uppercase characters")
    if (upperConfirm ===0){
      return "";
    }

  var numbersConfirm = confirm("Do you want to use numbers")
    if (numbersConfirm ===0){
      return "";
    }
  
  var specialConfirm = confirm("Do you want to use special characters")
    if (specialConfirm ===0){
      return "";
    }
  
  


  // popUp(userLength, lowerConfirm, upperConfirm, numbersConfirm, specialConfirm)

  // var buildPassword = [lowerRandom, upperRandom, numberRandom, specialRandom]

  // console.log(buildPassword);

  // for (var i = 0; i < userLength; i++) {
  //   console.log("Hello", i);
  // }

  // console.log(userLength, lowerConfirm, upperConfirm, numbersConfirm, specialConfirm);
  // console.log(lowerRandom());
  // console.log(upperRandom());
  // console.log(numberRandom());
  // console.log(specialRandom());

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword()
 
  var passwordText = document.querySelector("#password");

  // return "lowerRandom, upperRandom, numberRandom, specialRandom";

  passwordText.value = password;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
