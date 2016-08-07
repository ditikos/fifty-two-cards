import {Card} from "./Card"

export enum SUITS {
    CLUB = 1,
    DIAMOND,
    HEART,
    SPADE
}

export enum COLORS {
    BLACK = 1,
    RED
}

export class FiftyTwoCard extends Card {
    private _orderNo: number;
    private _suit: SUITS;
    private _color: COLORS;

    constructor(name: string, orderNo: number, suit: SUITS, color: COLORS) {
        super(name, false);
        this._orderNo = orderNo;
        this._suit = suit;
        this._color = color;
    }

    printCard() {
        console.log(`This card is named: ${this.title}, it has numeric: ${this._orderNo}, belongs to the suit: ${SUITS[this._suit]} and is colored: ${COLORS[this._color]}.`);
    }
}