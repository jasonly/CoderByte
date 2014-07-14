//Dash Insert
//Using the JavaScript language, have the function DashInsert(num) insert dashes ('-') between each two odd numbers in num.
//For example: if num is 454793 the output should be 4547-9-3. Don't count zero as an odd number. 

function DashInsert(num) { 
  var numString = num.toString();						//Convert the number into a string
  var newStr = [];										//Stores the new string
  
  for(var i = 0; i < numString.length; i++) {
    
    if(numString[i] % 2 && numString[i+1] % 2) {		//Loops through the string and checks if the first and second element are even
         newStr.push(numString[i]);						//If they both aren't then push that element into an array
         newStr.push("-");								//And add a dash
       } else {
         newStr.push(numString[i]);						//If those elements aren't even then push that element
       }
  }
  return newStr.join('');								//joins the array into a string.
 };