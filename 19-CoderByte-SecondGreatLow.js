//Second GreatLow
//Using the JavaScript language, have the function SecondGreatLow(arr) take the array of numbers stored in arr
//and return the second lowest and second greatest numbers, respectively, separated by a space. For example: if
//arr contains [7, 7, 12, 98, 106] the output should be 12 98. The array will not be empty and will contain at
//least 2 numbers. It can get tricky if there's just two numbers! 

function SecondGreatLow(arr) {
	var arrSort = arr.sort(function(a,b){return a - b});		//Sorts the array in ascending order

		if (arrSort.length <= 3) {
			return "Array does not have enough elements";
		} else if (arrSort.length > 3) {
			for(i=0; i < arrSort.length; i++){		//Loop through my sorted array
                if (arrSort[i] === arrSort[i-1]) {			//Checks the previous element with the current element of the array
                  arrSort.pop(i);					//If they're the same then pop out that element. Removes all duplicates.
                }
            }
         }

	var secondLowest = arrSort[1]; 					//selects the second lowest element in the array
	arrSort.reverse()						//reverses the array
	var secondLargest = arrSort[1];					//selects the second highest element in the array

	return secondLowest + " " + secondLargest;
};
