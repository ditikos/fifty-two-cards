"use strict";
var FiftyTwoCard_1 = require("./lib/FiftyTwoCard");
var Deck_1 = require("./lib/Deck");
var cardJSON = require('./static_data/cards.json');
console.log("Welcome! This is Fifty-Two, a card game for 1 person");
var deck = new Deck_1.Deck();
cardJSON.forEach(function (element) {
    var aCard = new FiftyTwoCard_1.FiftyTwoCard(element.title, element.orderNo, element.suit, element.color);
    deck.addCards(aCard);
});
console.log("*** ORIGINAL STATE ***");
deck.printCards();
console.log("*** SHUFFLE ***");
deck.shuffle2();
console.log("*** AFTER SHUFFLE ***");
deck.printCards();
//# sourceMappingURL=index.js.map