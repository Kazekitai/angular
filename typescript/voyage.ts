class Sejour {
	constructor(private _nom:string, private _prix:number){
	}

	get nom() {
		return this._nom
	}
	get prix() {
		return this._prix
	}
}

class SejourService {
	constructor(private _sejours:Sejour[]){
		this._sejours = [new Sejour('Lisbonne',100),new Sejour('Paris',90)]
	}

	findByNom(nomSejour:string):Sejour[] {
		return this._sejours.filter(s => s.nom == nomSejour)
	}

}
let sejours:Sejour[] = [];
let sejourService = new SejourService(sejours)
console.log(sejourService.findByNom('Lisbonne'))
console.log(sejourService.findByNom('Paris'))