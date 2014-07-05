//String Split
//Using the JavaScript language, have the function AlphabetSoup(str) take the str string parameter 
//being passed and return the string with the letters in alphabetical order (ie. hello becomes ehllo). 
//Assume numbers and punctuation symbols will not be included in the string. 

function alphabetSoup(str) { 
  
  var stringSplit = str.split('').sort().join(''); 
  
  return stringSplit;          
};

//split('') splits the string into an array of individual characters
//sort() arranges them alphabetically 
//join('') joins the array back together