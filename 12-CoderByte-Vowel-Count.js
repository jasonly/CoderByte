//Vowel Count
//Using the JavaScript language, have the function VowelCount(str) take the str string parameter being passed
//and return the number of vowels the string contains (ie. "All cows eat grass" would return 5). Do not count 
//y as a vowel for this challenge. 

function vowelCount(str) { 
  var strSplit = str.toUpperCase().split('');
  var count = 0;
  
  for (var i = 0; i < strSplit.length; i++){
         if (strSplit[i] === "A") {
            count++
        } else if (strSplit[i] === "E") {
            count++
        } else if (strSplit[i] === "I") {
            count++
        } else if (strSplit[i] === "O") {
            count++
        } else if (strSplit[i] === "U") 
            count++
  }
  // code goes here  
  return count;     
};

//Takes a string, capitalizes everything and split it into an array of characters.
//Then loop through strSplit checking for vowels if there is one then increase the count by 1
//There's probably a way better way to do this.