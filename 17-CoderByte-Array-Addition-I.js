//Array Addition I
//Using the JavaScript language, have the function ArrayAdditionI(arr) take the array of numbers stored in arr
//and return the string true if any combination of numbers in the array can be added up to equal the largest
//number in the array, otherwise return the string false. For example: if arr contains [4, 6, 23, 10, 1, 3] the
//output should return true because 4 + 6 + 10 + 3 = 23. The array will not be empty, will not contain all the 
//same elements, and may contain negative numbers. 

function ArrayAdditionI(arr) {
	var arrSort = arr.sort(function(a,b){return a-b});
		//sorts all numbers in the array from smallest to largest
	var popSort = arrSort.pop();
		//pops out the last number, realized that there could possibly be duplicate numbers
	
	var arrNotGreatest = function(arr) {
		return arr != popSort;
	}

	var filter = arr.filter(arrNotGreatest);
		//created an array that does not contain all occurrences of the largest number
		//and named this array under the variable filter
    
    var sumArr = filter.reduce(function(a,b){return a+b});
    	//added up all the elements in this array
        
    return sumArr == popSort;
    	//compared the sum to the highest number
};


function ArrayAdditionI(arr) { 
  arr.sort(function(a,b){return a - b})
  var largest = arr.pop();
  var sum = 0;

  for (var i = 0; i < arr.length; i++){
    sum = arr[i] + sum;
    for (var j = 0; j < arr.length; j++){
      if (i != j) {
        sum = arr[j] + sum;
        if (sum == largest) {
          return true;
        }
      }
    }
    for (var k = 0; k < arr.length; k++) {
      if (i != k) {
        sum = arr[k] - sum;
        if (sum == largest) {
          return true;
        }
      }
    }
    sum = 0;
  }  
  return false; 
}
