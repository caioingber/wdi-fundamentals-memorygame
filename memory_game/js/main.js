console.log("Up and running!");

const cards = ["queen", "king", "king", "king"];
const cardsInPlay = [];
var cardOne = cards[0];
cardsInPlay.push(cardOne);
var cardTwo = cards[1];
cardsInPlay.push(cardTwo);
var cardThree = cards[2];
var cardFour = cards[3];

if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	}
	else {
		alert("Sorry, try again.");
	}
};

console.log("User flipped " + cardOne);
console.log("User flipped " + cardTwo);
console.log("User flipped " + cardThree);
console.log("User flipped " + cardFour);