export class Collegue {
	constructor(private _nom:string, private _url:string, private _score:number){
	}

	get score() {
		return this._score
	}

	set score(newScore) {
		this._score = newScore
	}
}
