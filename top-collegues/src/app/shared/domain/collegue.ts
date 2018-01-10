
export class Collegue {
	constructor(private _id:number, public pseudo:string, public imageUrl:string, private _score:number){
	}

	get score() {
		return this._score;
	}

	set score(newScore) {
		this._score = newScore;
	}

	get id() {
		return this._id
	}

	set id(newId) {
		this._id = newId;
	}
}
