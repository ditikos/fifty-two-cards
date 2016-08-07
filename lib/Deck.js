"use strict";
var Deck = (function () {
    function Deck() {
        // initialize our stack of cards (DECK)
        this.cards = [];
    }
    // Add 1~N Cards to deck
    Deck.prototype.addCards = function () {
        var newCards = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            newCards[_i - 0] = arguments[_i];
        }
        (_a = this.cards).push.apply(_a, newCards);
        var _a;
    };
    // Suffle cards using Fisher-Yates algorithm
    // Wikipedia implementation -- first element is always Ace? :( 
    Deck.prototype.shuffle = function () {
        var i = this.cards.length;
        while (i > 1) {
            i = i - 1;
            var j = 1 + Math.floor(Math.random() * i);
            var tmp = this.cards[j];
            this.cards[j] = this.cards[i];
            this.cards[i] = tmp;
        }
    };
    // https://bost.ocks.org/mike/shuffle/
    // Mike Bostock's implementation -- better shuffle
    Deck.prototype.shuffle2 = function () {
        var m = this.cards.length;
        var t, i;
        while (m) {
            i = Math.floor(Math.random() * m--);
            t = this.cards[m];
            this.cards[m] = this.cards[i];
            this.cards[i] = t;
        }
    };
    Object.defineProperty(Deck.prototype, "length", {
        // Get deck length.
        get: function () {
            return this.cards.length;
        },
        enumerable: true,
        configurable: true
    });
    // Print the deck
    Deck.prototype.printCards = function () {
        for (var _i = 0, _a = this.cards; _i < _a.length; _i++) {
            var card = _a[_i];
            card.printCard();
        }
    };
    return Deck;
}());
exports.Deck = Deck;
//# sourceMappingURL=Deck.js.map