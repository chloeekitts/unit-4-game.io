var words = ['wow'];

var selectedWord = words [0];

var makeUnderscore = function(){
	return '_';
};

var makeDiv = fuction(letter){
	return '<div>' + letter + '</div>';
}

selectedWord
	.split('')
	.map(makeUnderscore);//* turns everything into an underscore//*
	.join(",")


//*NEW CODE NOTES - Separate from above code*//

var words = ['wow'];
var makeUnderscore = function(el){
	return '_';
};

var makeDiv = function(letter){
	return '<div class="underscore">' + letter + '</div>'
}



var selectedWord = words[0];
var copy = selectedWord.split('');

var listOfUnderScores = selectedWord
	.split('')
	.map(mapMakeUnderscore)

var letterPressed = 'w';

var index = copy.indexOf(letterPressed)

while (index > -1) {
		copy.splice(index, 1, null);
	index = copy.indedOf(letterPressed);
	
}

$('').html(listOfUnderScores);


