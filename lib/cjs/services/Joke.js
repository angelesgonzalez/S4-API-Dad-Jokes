"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Joke = void 0;
class Joke {
    constructor(joke) {
        this._id = Joke.nextId++;
        this._text = joke;
        this._date = new Date();
        this._score = 0;
    }
    //getters
    get id() {
        return this._id;
    }
    get text() {
        return this._text;
    }
    get date() {
        return this._date.toISOString();
    }
    //setters
    set score(newScore) {
        this._score = newScore;
    }
}
exports.Joke = Joke;
Joke.nextId = 0;
//# sourceMappingURL=Joke.js.map