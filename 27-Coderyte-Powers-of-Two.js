//Powers of Two
//Using the JavaScript language, have the function PowersofTwo(num) take the num parameter being passed which will be an
//integer and return the string true if it's a power of two. If it's not return the string false. For example if the input is
//16 then your program should return the string true but if the input is 22 then the output should be the string false. 

function PowersofTwo(num) {
  
  for(var i = 0; i < num; i++){
     var powers = Math.pow(2, i)		//Calculates the power of two up to num and stores it in the var powers
         if (powers == num){			//at each i powers gets checked vs num if num is a power then it'll match at some point
           return true;					//at which it'll return true
         }
  }
  return false;							//otherwise if it loops all the way through it'll return false =0!
};