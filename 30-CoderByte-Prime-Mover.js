//Prime Mover
//Using the JavaScript language, have the function PrimeMover(num) return the numth prime number. 
//The range will be from 1 to 10^4. For example: if num is 16 the output should be 53 as 53 is the 16th prime number. 

//Used the function from the other problem to check for prime numbers
function PrimeTime(number) {

	if(number<2 || number != Math.round(number)){
		return false;
	}

	for(var i = 2; i < number; i++){
		if(number%i == 0){
			return false;
		}
	}
	return true;
};

function PrimeMover(num) {
	var primeArray = [];									//Stores all the prime numbers

	if(num == 0){													//Initial check
		return 1;
	}

	for(var i = 1; i < 10000; i++){				//Loops from 1 to 10000 checking for prime numbers. If there is one then it
		if(PrimeTime(i)){										//If there is one then it gets pushed into the array.
			primeArray.push(i);
		}
	}
	return primeArray[num];								//returns the nth element of the array with num.
};

//If you store all the prime numbers in an array then num is equal to the nth element of that array 