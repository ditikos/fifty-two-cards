import {FiftyTwoCard} from "./FiftyTwoCard"

export class Deck {
    // initialize our stack of cards (DECK)
    private cards: FiftyTwoCard[] = [];

    // Add 1~N Cards to deck
    addCards(...newCards: FiftyTwoCard[]) {
        this.cards.push(...newCards);
    }

    // Suffle cards using Fisher-Yates algorithm
    // Wikipedia implementation (python) -- first element is always Ace? :( 
    shuffle() {
        var i = this.cards.length;
        while (i > 1) {
            i = i - 1;
            var j = 1 + Math.floor(Math.random() * i);
            var tmp = this.cards[j];
            this.cards[j] = this.cards[i];
            this.cards[i] = tmp; 
        }
    }

    // https://bost.ocks.org/mike/shuffle/
    // Mike Bostock's implementation -- better shuffle
    shuffle2() {
        var m = this.cards.length;
        var t, i;
        while (m) {
            i = Math.floor(Math.random() * m--);

            t = this.cards[m];
            this.cards[m] = this.cards[i];
            this.cards[i] = t;
        }
    }

    // Get deck length.
    get length() {
        return this.cards.length
    }

    // Print the deck
    printCards() {
        for (var card of this.cards) {
            card.printCard();
        }
    }

}