//Simple Symbols
//Using the JavaScript language, have the function SimpleSymbols(str) take the str parameter being passed and determine if
//it is an acceptable sequence by either returning the string true or false. The str parameter will be composed of + and =
//symbols with several letters between them (ie. ++d+===+c++==a) and for the string to be true each letter must be
//surrounded by a + symbol. So the string to the left would be false. The string will not be empty and will have at least
//one letter. 

function SimpleSymbols(str) {
  var strCap = str.toUpperCase();						//Change everything to uppercase
  var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";			//Used to compare to each letter in the string
  
  for (var i = 0; i < strCap.length; i++) {				//Loops through the string
    if(alphabet.indexOf(strCap[i]) != -1){				//Checks the string for letters and compares it for alphabet
      if(strCap[i-1] == "+" && strCap[i+1] == "+")		//If that was true then checks -1 and +1 for "+"
        return true;
    }
  }
  // code goes here  
   return false; 
};