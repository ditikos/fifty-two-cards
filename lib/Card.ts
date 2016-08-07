export class Card {
    private _title: string;              // name of the card
    private _faceup: boolean = false;    // start facedown
    
    constructor(title: string, faceUp: boolean) {
        this._title  = title;
        this._faceup = faceUp;
    }

    get title(): string { return this._title; }
    set title(value: string) {
        this._title = value;
    }

    get isFaceUp(): boolean { return this._faceup; }
    set isFaceUp(value: boolean) {
        this._faceup = value;
    }
}