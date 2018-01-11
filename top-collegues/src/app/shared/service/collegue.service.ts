import { Injectable } from '@angular/core';
import { Collegue } from '../domain/collegue';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CollegueService {
	collegues:Collegue[];
  	constructor(private http:HttpClient) {	}

  	// listerCollegues():Promise<Collegue[]> {
	// return this.http.get<Collegue[]>('http://localhost:8080/collegues').toPromise();
	// }

	listerCollegues():Observable<Collegue[]> {
		return this.http.get<Collegue[]>('http://localhost:8080/collegues');
		}

	// recupererCollegueParPseudo(pseudo:string):Promise<Collegue> {
	// return this.http.get<Collegue>('http://localhost:8080/collegues/'+pseudo).toPromise();
	// }
	recupererCollegueParPseudo(pseudo:string):Observable<Collegue> {
		return this.http.get<Collegue>('http://localhost:8080/collegues/'+pseudo);
		}
	
	sauvegarder(newCollegue:Collegue):Promise<any> {
		const httpOptions = {
			headers: new HttpHeaders({ 'Content-Type': 'application/json' })
		};
		return this.http.post<Collegue>('http://localhost:8080/collegues/creer',newCollegue,httpOptions).toPromise();
	}

	// aimerUnCollegue(unCollegue:Collegue):Promise<Collegue> {
	// 	const httpOptions = {
	// 		headers: new HttpHeaders({ 'Content-Type': 'application/json' })
	// 	};
	// 	let actionType= {"action":"aimer"};
	// 	return this.http.patch<Collegue>('http://localhost:8080/collegues/'+unCollegue.pseudo,actionType).toPromise();
	// }
	aimerUnCollegue(unCollegue:Collegue):Observable<Collegue> {
		const httpOptions = {
			headers: new HttpHeaders({ 'Content-Type': 'application/json' })
		};
		let actionType= {"action":"aimer"};
		return this.http.patch<Collegue>('http://localhost:8080/collegues/'+unCollegue.pseudo,actionType);
	}

	// detesterUnCollegue(unCollegue:Collegue):Promise<Collegue> {
	// 	const httpOptions = {
	// 		headers: new HttpHeaders({ 'Content-Type': 'application/json' })
	// 	};
	// 	let actionType= {"action":"detester"};
	// 	return this.http.patch<Collegue>('http://localhost:8080/collegues/'+unCollegue.pseudo,actionType).toPromise();
	// }

	detesterUnCollegue(unCollegue:Collegue):Observable<Collegue> {
		const httpOptions = {
			headers: new HttpHeaders({ 'Content-Type': 'application/json' })
		};
		let actionType= {"action":"detester"};
		return this.http.patch<Collegue>('http://localhost:8080/collegues/'+unCollegue.pseudo,actionType);
	}

}
