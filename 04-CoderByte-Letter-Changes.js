//Letter Changes
//Using the JavaScript language, have the function LetterChanges(str) take the str parameter being passed and modify it
//using the following algorithm. Replace every letter in the string with the letter following it in the alphabet (ie. c
//becomes d, z becomes a). Then capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified
//string. 

//Loops through the string and checks each letter while creating a new string and replacing those letters with the algorithm
//described in the prompt. I'm 100% sure there's a better way to do this, but at the moment this was the easiest way.
//I'll come back to this when I have a better approach to solving this problem.

function LetterChanges(str) { 
  var strLow = str.toLowerCase();
  var newStr = [];
  
  for(var i = 0; i < strLow.length; i++) {
    if(strLow[i] == "a") {
      newStr.push("b");
    } else if (strLow[i] == "b") {
      newStr.push("c");
    } else if (strLow[i] == "c") {
      newStr.push("d");
    } else if (strLow[i] == "d") {
      newStr.push("E");
    } else if (strLow[i] == "e") {
      newStr.push("f");
    } else if (strLow[i] == "f") {
      newStr.push("g");
    } else if (strLow[i] == "g") {
      newStr.push("h");
    } else if (strLow[i] == "h") {
      newStr.push("I");
    } else if (strLow[i] == "i") {
      newStr.push("j");
    } else if (strLow[i] == "j") {
      newStr.push("k");
    } else if (strLow[i] == "k") {
      newStr.push("l");
    } else if (strLow[i] == "l") {
      newStr.push("m");
    } else if (strLow[i] == "m") {
      newStr.push("n");
    } else if (strLow[i] == "n") {
      newStr.push("O");
    } else if (strLow[i] == "o") {
      newStr.push("p");
    } else if (strLow[i] == "p") {
      newStr.push("q");
    } else if (strLow[i] == "q") {
      newStr.push("r");
    } else if (strLow[i] == "r") {
      newStr.push("s");
    } else if (strLow[i] == "s") {
      newStr.push("t");
    } else if (strLow[i] == "t") {
      newStr.push("U");
    } else if (strLow[i] == "u") {
      newStr.push("v");
    } else if (strLow[i] == "v") {
      newStr.push("w");
    } else if (strLow[i] == "w") {
      newStr.push("x");
    } else if (strLow[i] == "x") {
      newStr.push("y");
    } else if (strLow[i] == "y") {
      newStr.push("z");
    } else if (strLow[i] == "z") {
      newStr.push("A");
    } else {
      newStr.push(strLow[i]);
    }
  }
  return newStr.join('');
};