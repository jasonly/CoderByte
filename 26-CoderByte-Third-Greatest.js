//Third Greatest
//Using the JavaScript language, have the function ThirdGreatest(strArr) take the array of strings stored in strArr and
//return the third largest word within in. So for example: if strArr is ["hello", "world", "before", "all"] your output
//should be world because "before" is 6 letters long, and "hello" and "world" are both 5, but the output should be world
//because it appeared as the last 5 letter word in the array. If strArr was ["hello", "world", "after", "all"] the output
//should be after because the first three words are all 5 letters long, so return the last one. The array will have at least
//three strings and each string will only contain letters. 

function ThirdGreatest (strArr) {
	var largest = ''; 								//keeps track of the largest word
	var count = 0;									//count keeps track of how many copies of the largest word there is in the array

	for (var i=0; i<strArr.length; i++) {			//loop through the array and compare each element to the largest
		if (strArr[i].length >= largest.length) {
			largest = strArr[i];
			count++;
			if (count == 3) {						//if there are three largest words of equal length then return that word instead
				return largest;
			};
		}

	}
	return largest;
};