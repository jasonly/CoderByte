//Simple Adding
//Using the JavaScript language, have the function SimpleAdding(num) add up all the numbers from 1 to num.
//For the test cases, the parameter num will be any number from 1 to 1000. 

function simpleAdding (num) {
	var sum = 0;

	for(i = 0; i <= num; i++) {
		sum = i + sum;
	}
	return sum;
};

//Created a variable sum starting at zero then looped up to num, at each step add i to sum until i = num.
