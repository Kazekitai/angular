import { Collegue } from './collegue';
export class Vote {
	constructor(public id:number, public collegue:Collegue, public avis:string){
    }
    
    getVoteMessage() {
        return "un vote '" + this.avis + "' pour " + this.collegue.pseudo + ". Son score est désormais à " + this.collegue.score;
    }

}
