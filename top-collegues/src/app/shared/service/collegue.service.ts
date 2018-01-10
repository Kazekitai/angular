import { Injectable } from '@angular/core';
import { Collegue } from '../domain/collegue';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class CollegueService {
	collegues:Collegue[];
  	constructor(private http:HttpClient) { }

  	listerCollegues():Promise<Collegue[]> {
	return this.http.get<Collegue[]>('http://localhost:8080/collegues').toPromise();
	}
	
}
