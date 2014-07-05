//Word Count
//Using the JavaScript language, have the function WordCount(str) take the str string parameter being passed
//and return the number of words the string contains (ie. "Never eat shredded wheat" would return 4). Words
//will be separated by single spaces. 


function WordCount(str) {
  var wordSplit = str.split(' ');
 
  return wordSplit.length;        
}

//Split the string into an array of words and then count the number of elements in that array