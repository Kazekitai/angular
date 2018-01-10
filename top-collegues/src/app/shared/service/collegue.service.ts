import { Injectable } from '@angular/core';
import { Collegue } from '../domain/collegue';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class CollegueService {
	collegues:Collegue[];
  	constructor(private http:HttpClient) {
  	}

  	listerCollegues():Promise<Collegue[]> {
	return this.http.get<Collegue[]>('http://localhost:8080/collegues').toPromise();
	}
	
	sauvegarder(newCollegue:Collegue):Promise<Collegue> {
		return this.http.post<Collegue>('http://localhost:8080/collegues/creer',newCollegue).toPromise();
	}

	aimerUnCollegue(unCollegue:Collegue):Promise<Collegue> {
		let actionType= {"action":"aimer"};
		return this.http.patch<Collegue>('http://localhost:8080/collegues/'+unCollegue.pseudo,actionType).toPromise();
	}

	detesterUnCollegue(unCollegue:Collegue):Promise<Collegue> {
		let actionType= {"action":"detester"};
		return this.http.patch<Collegue>('http://localhost:8080/collegues/'+unCollegue.pseudo,actionType).toPromise();
	}
}
