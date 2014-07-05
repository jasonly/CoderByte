//Arith Geo
//Using the JavaScript language, have the function ArithGeo(arr) take the array of numbers stored in arr and
//return the string "Arithmetic" if the sequence follows an arithmetic pattern or return "Geometric" if it
//follows a geometric pattern. If the sequence doesn't follow either pattern return -1. An arithmetic sequence
//is one where the difference between each of the numbers is consistent, where as in a geometric sequence, each
//term after the first is multiplied by some constant or common ratio. Arithmetic example: [2, 4, 6, 8] and
//Geometric example: [2, 6, 18, 54]. Negative numbers may be entered as parameters, 0 will not be entered, and
//no array will contain all the same elements. 

function ArithGeo(arr) {
    var isArithmetic = true;
    var isGeometric = true;
    var ftArithmetic = arr[1] - arr[0];			//Calculated the first two values for the arithmetic comparision later
    var ftGeometric = arr[1] / arr[0];			//Calculated the first two values for the geometric comparison later

    for (var i = 0; i < arr.length-1; i++) {	//Used a for loop to loop through my array and do calculations on every element
        var allAri = arr[i + 1] - arr[i]		//Calculates all the values in the array for arithmetic
        var allGeo = arr[i + 1] / arr[i]		//Calculates all the values in the array for geometric

        if (allAri != ftArithmetic) {			//used an if else statement to compare if allAri is not equal to ftArithmetic
            var isArithmetic = false;			//then change isArithmetic to false
        } else (allGeo != ftGeometric)			//same thing is done here for geometric
            var isGeometric = false;
    };

    if (isArithmetic) {							//the if statement checks the initial variables isArithmetic and isGeometric
        return "Arithmetic";					//for true of false. If false then continue until it returns -1.
    } else if (isGeometric) {
        return "Geometric";
    } else {
        return -1;
    }

};