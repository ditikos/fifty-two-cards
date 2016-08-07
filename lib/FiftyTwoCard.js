"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Card_1 = require("./Card");
(function (SUITS) {
    SUITS[SUITS["CLUB"] = 1] = "CLUB";
    SUITS[SUITS["DIAMOND"] = 2] = "DIAMOND";
    SUITS[SUITS["HEART"] = 3] = "HEART";
    SUITS[SUITS["SPADE"] = 4] = "SPADE";
})(exports.SUITS || (exports.SUITS = {}));
var SUITS = exports.SUITS;
(function (COLORS) {
    COLORS[COLORS["BLACK"] = 1] = "BLACK";
    COLORS[COLORS["RED"] = 2] = "RED";
})(exports.COLORS || (exports.COLORS = {}));
var COLORS = exports.COLORS;
var FiftyTwoCard = (function (_super) {
    __extends(FiftyTwoCard, _super);
    function FiftyTwoCard(name, orderNo, suit, color) {
        _super.call(this, name, false);
        this._orderNo = orderNo;
        this._suit = suit;
        this._color = color;
    }
    FiftyTwoCard.prototype.printCard = function () {
        console.log("This card is named: " + this.title + ", it has numeric: " + this._orderNo + ", belongs to the suit: " + SUITS[this._suit] + " and is colored: " + COLORS[this._color] + ".");
    };
    return FiftyTwoCard;
}(Card_1.Card));
exports.FiftyTwoCard = FiftyTwoCard;
//# sourceMappingURL=FiftyTwoCard.js.map