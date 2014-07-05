//AB Check
//Using the JavaScript language, have the function ABCheck(str) take the str parameter being
//passed and return the string true if the characters a and b are separated by exactly 3 places 
//anywhere in the string at least once (ie. "lane borrowed" would result in true because there
//is exactly three characters between a and b). Otherwise return the string false. 

function ABCheck(str) {
  var strCap = str.toUpperCase();				//Put the string in all caps to make it easier for the if statements
  
  for (var i = 0; i < strCap.length; i++){		//loop through each character of the string
    if (strCap[i] == "A"){						//If A is found then and B is found 4 spaces after
      if (strCap[i+4] == "B"){
        return true;							//return true
      }
    }
    return false;								//otherwise return false
  }      
};