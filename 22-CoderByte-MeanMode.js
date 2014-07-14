//MeanMode
//Using the JavaScript language, have the function MeanMode(arr) take the array of numbers stored in arr and return 1 if the
//mode equals the mean, 0 if they don't equal each other (ie. [5, 3, 3, 3, 1] should return 1 because the mode (3) equals 
//the mean (3)). The array will not be empty, will only contain positive integers, and will not contain more than one mode. 


function MeanMode(arr) {
  arr.sort();                             //Sorts the array in ascending order
  var mean = 0;                           //Stores the calculated mean
  var mode = 0;                           //Stores the calculated mode
  var total = 0;                          //Stores the sum of each element in the array
  var count = 1;                          //Keeps the total count of the reccuring elements
  var highestCount = 0;                   //Stores the highest counted reccuring elements
  
  
  for (var i = 0; i < arr.length; i++){   //Loop through the array 
      total = total + arr[i];             //Adds total to each element in the array
    
    if (arr[i] == arr[i+1]) {             //Checks if the first element is the same as the next
        count++;                          //Adds to the count if this is true
        if(count > highestCount){         //And checks if count is greater than highest counted so far
          highestCount = count;           //This should be replaced if there is another number that's encountered that has more recurrences
          mode = arr[i];                  //Stores that element as the mode
          count = 1;                      //Reset count back to 1
        }
      }
    }

  mean = (total/arr.length);              //Calculates the mean
  
  if(mean == mode) {                      //An if statement to check if mean is equal to the mode
    return 1;
  } else {
    return 0;
  }      
};