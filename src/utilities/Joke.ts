export class Joke {
	static nextId = 0;
	_id: number;
	_text: string;
	_date: Date;
	_score: number;
	_type: string;

	constructor(joke: string, type: string) {
		this._id = Joke.nextId++;
		this._text = joke;
		this._date = new Date();
		this._score = 0;
		this._type = type;
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

	get type() {
		return this._type;
	}

	set score(newScore: number) {
		this._score = newScore;
	}
	set type(newType: string) {
		this._type = newType;
	}
}
