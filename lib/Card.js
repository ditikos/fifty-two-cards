"use strict";
var Card = (function () {
    function Card(title, faceUp) {
        this._faceup = false; // start facedown
        this._title = title;
        this._faceup = faceUp;
    }
    Object.defineProperty(Card.prototype, "title", {
        get: function () { return this._title; },
        set: function (value) {
            this._title = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Card.prototype, "isFaceUp", {
        get: function () { return this._faceup; },
        set: function (value) {
            this._faceup = value;
        },
        enumerable: true,
        configurable: true
    });
    return Card;
}());
exports.Card = Card;
//# sourceMappingURL=Card.js.map