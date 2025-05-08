export declare class Joke {
    static nextId: number;
    _id: number;
    _text: string;
    _date: Date;
    _score: number;
    _type: string;
    constructor(joke: string);
    get id(): number;
    get text(): string;
    get date(): string;
    get type(): string;
    set score(newScore: number);
    set type(newType: string);
}
