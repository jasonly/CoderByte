//ExOh
//Using the JavaScript language, have the function ExOh(str) take the str parameter being passed and return 
//the string true if there is an equal number of x's and o's, otherwise return the string false. Only these 
//two letters will be entered in the string, no punctuation or numbers. For example: if str is "xooxxxxooxo"
//then the output should return false because there are 6 x's and 5 o's. 

function ExOh(str) { 
  var splitStr = str.split('');
  var countX = 0;
  var countO = 0;
  
  for (var i = 0; i < splitStr.length; i++) {
        if(splitStr[i] === "x") {
          countX++
        } else if (splitStr[i] === "o") {
          countO++
        }
  }
  return countX === countO;     
};

//Splits a string into an array of characters and then counts the X's and O's using a for loop
//stores the number of X's and O's in the string as variables and compares them.