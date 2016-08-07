import {FiftyTwoCard} from "./lib/FiftyTwoCard"
import {Deck} from "./lib/Deck"

import {SUITS} from "./lib/FiftyTwoCard"
import {COLORS} from "./lib/FiftyTwoCard"

var cardJSON = require('./static_data/cards.json');

console.log("Welcome! This is Fifty-Two, a card game for 1 person");

var deck = new Deck();

cardJSON.forEach(element => {
    var aCard = new FiftyTwoCard(element.title, element.orderNo, element.suit, element.color);
    deck.addCards(aCard);
});

console.log("*** ORIGINAL STATE ***");
deck.printCards();
console.log("*** SHUFFLE ***");
deck.shuffle2();
console.log("*** AFTER SHUFFLE ***");
deck.printCards();