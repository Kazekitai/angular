import { Injectable } from '@angular/core';
import { Collegue } from '../domain/collegue';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class CollegueService {
	collegues:Collegue[];
  	constructor(private http:HttpClient) {
  		// this.headers = new Headers({ 'Content-Type': 'application/json', 
    //                                  'Accept': 'q=0.8;application/json;q=0.9' });
    //     this.options = new RequestOptions({ headers: this.headers });
  	}

  	listerCollegues():Promise<Collegue[]> {
	return this.http.get<Collegue[]>('http://localhost:8080/collegues').toPromise();
	}
	
	sauvegarder(newCollegue:Collegue):Promise<Collegue> {
		console.log('newCollegue ', newCollegue);
		return this.http.post<Collegue>('http://localhost:8080/collegues/creer',newCollegue).toPromise();
	}
}
