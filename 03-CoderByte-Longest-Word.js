//Longest Word
//Using the JavaScript language, have the function LongestWord(sen) take the sen parameter being passed and
//return the largest word in the string. If there are two or more words that are the same length, return the
//first word from the string with that length. Ignore punctuation and assume sen will not be empty. 

function longestWord(sen) {
	var sentenceSplit = sen.split(' ');
	var greatestWord = '';

	for(var i = 0; i < sentenceSplit.length; i++){
		var word = sentenceSplit[i];

		if (word.length > greatestWord.length){
			greatestWord = word;
		}
	}
	return greatestWord;
};
//The longestWord function takes the longest word from a sentence and returns it
//sentenceSplit splits the sentence into words
//greatestWord is an empty variable where we'll store the longest word
//Used a for loop to go through my sentence word by word and stored each word in a new variable called word
//The if statement compares the current word to the greatestWord so far, and if it's greater, then it
//replaces that word. 
