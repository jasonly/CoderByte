//Letter Capitalize
//Using the JavaScript language, have the function LetterCapitalize(str) take the str parameter being passed 
//and capitalize the first letter of each word. Words will be separated by only one space.
function letterCapitalize (str) {
	var splitToWords = str.split(' ');
		//if str = the cat is here then --> [the, cat, is, here]
	for (var i = 0; i < splitToWords.length; i++){
		var splitToLetters = splitToWords[i].split('');
		//[the...] --> [t, h, e] this cycles through then goes on to the next word
		splitToLetters[0] = splitToLetters[0].toUpperCase();
		splitToWords[i] = splitToLetters.join('');
		//i = the at the moment and it gets joined back into a word
	}
	return splitToWords.join(' ');
};

//Take a string then split it into words. Then loop through that array of words and split each word
//into an array of letters. The first element of that array is then capitalized with toUpperCase
//Then the word that was split into an array of letters is joined back and we return
//the joined array of split words
