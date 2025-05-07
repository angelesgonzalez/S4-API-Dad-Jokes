export class Joke {
	static nextId = 0;
	_id: number; 
	_text: string;
	_date: Date;
	_score: number;

	constructor(joke: string) {
		this._id = Joke.nextId++;
		this._text = joke;
		this._date = new Date();
		this._score = 0;
	}


	get id() {
		return this._id;
	}

	get text() {
		return this._text;
	}
	get date() {
		return this._date.toISOString();
    }
    


	set score(newScore: number) {
		this._score = newScore;
	}
}
