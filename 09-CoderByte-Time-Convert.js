//Time Convert
//Using the JavaScript language, have the function TimeConvert(num) take the num parameter being passed and 
//return the number of hours and minutes the parameter converts to (ie. if num = 63 then the output should be 
//1:3). Separate the number of hours and minutes with a colon. 

function timeConvert(num){

	var hours = Math.floor(num/60);
	var minutes = num%60;

	return hours + " : " + minutes;
};

//var hours will round to the largest integer
//var minutes returns the remainder of num which should be the minutes
//puts everything into a string