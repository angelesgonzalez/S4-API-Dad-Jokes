export declare class Joke {
    static nextId: number;
    _id: number;
    _text: string;
    _date: Date;
    _score: number;
    constructor(joke: string);
    get id(): number;
    get text(): string;
    get date(): string;
    set score(newScore: number);
}
