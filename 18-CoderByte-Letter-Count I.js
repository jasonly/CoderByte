//Letter Count I
//Using the JavaScript language, have the function LetterCountI(str) take the str parameter being passed and
//return the first word with the greatest number of repeated letters. For example: "Today, is the greatest day
//ever!" should return greatest because it has 2 e's (and 2 t's) and it comes before ever which also has 2 e's.
//If there are no words with repeating letters return -1. Words will be separated by spaces. 

  function LetterCountI(str) {
    var strSplit = str.split(' ');                //Split string into an array of words
    var count = 1;
    var word = "";
    var curCount = 1;
    var gWord = "";

    for(var i = 0; i < strSplit.length; i++) {    //Loop through the string of words
        var word = strSplit[i].split('').sort();  //Store each new element into word broken up into an array of letters and sorted
      for(var x = 0; x < word.length; x++) {      //Loop through each letter of word
        if(word[x] == word[x+1]){                 //If there are any duplicates then iterate the count
          count++;
          if(count>curCount){					  //If count is greater than current count then save that word and return it. Resetting the count.
            curCount = count;
            gWord = strSplit[i];
            count = 1;
          }
        }
      }
    }

    if(count != curCount) {
    	return gWord;
    } else {
    	return -1;
    }

  };