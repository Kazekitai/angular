
export class Collegue {
	constructor(public id:number, public pseudo:string, public imageUrl:string, public score:number){
	}

	scoreChanges(event) {
	    this.score = event;
	}

	handleEventClicked(newScore){
	    return this.score = newScore;
	}

}
