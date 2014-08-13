//Prime Time
//Using the JavaScript language, have the function PrimeTime(num) take the num parameter being passed and return the string true 
//if the parameter is a prime number, otherwise return the string false. The range will be between 1 and 2^16. 

function PrimeTime(num) {

  if(num < 2 || num != Math.round(num)){        //Checks if the number is not an integer or less than two then it's not prime
    return false;
  }

  for(var i = 2; i < num; i++){                 //Check every whole number from two to num 
    if(num%i == 0) {
      return false;
    }
  }
  return true;
}
//Can only be divided by only one or itself and must be a whole number greater than 1