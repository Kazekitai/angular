import { Injectable } from '@angular/core';
import { Collegue } from '../domain/collegue';
import { Vote } from '../domain/vote';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


@Injectable()
export class CollegueService {
	collegues:Collegue[];
	subject = new BehaviorSubject<Collegue[]>([]);
	subjectAvis = new BehaviorSubject<string[]>([]);
	subjectEnLigne  = new BehaviorSubject<string>("");
	subjectVote  = new BehaviorSubject<Vote[]>([]);
	subjectIdVote  = new BehaviorSubject<string>("");

	  constructor(private http:HttpClient) {
		  this.refresh();
		  this.refreshVotes("");
	}
	  
	refresh() {
		this.http.get<Collegue[]>('http://localhost:8080/collegues')
		.subscribe(data => this.subject.next(data))
	}

	refreshVotes(voteId:string) {
		this.http.get<Vote[]>('http://localhost:8080/votes?since='+voteId).subscribe(data => this.subjectVote.next(data));
	}

	listerCollegues():Observable<Collegue[]> {
		return this.subject.asObservable();
	}

	recupererCollegueParPseudo(pseudo:string):Observable<Collegue> {
		if(this.subject.getValue()) {
			return Observable.of(this.subject.getValue().find(col => col.pseudo==pseudo));
		} else {
			return this.http.get<Collegue>('http://localhost:8080/collegues/'+pseudo);
		}
	}
	
	sauvegarder(newCollegue:Collegue):Observable<any> {
		const httpOptions = {
			headers: new HttpHeaders({ 'Content-Type': 'application/json' })
		};
		return this.http.post<Collegue>('http://localhost:8080/collegues/creer',newCollegue,httpOptions);
	}

	aimerUnCollegue(unCollegue:Collegue):Observable<Collegue> {
		this.subjectAvis.next([unCollegue.pseudo, "aimer"]);
		const httpOptions = {
			headers: new HttpHeaders({ 'Content-Type': 'application/json' })
		};
		let actionType= {"action":"aimer"};
		return this.http.patch<Collegue>('http://localhost:8080/collegues/'+unCollegue.pseudo,actionType);
	}

	detesterUnCollegue(unCollegue:Collegue):Observable<Collegue> {
		this.subjectAvis.next([ unCollegue.pseudo, "detester"]);
		const httpOptions = {
			headers: new HttpHeaders({ 'Content-Type': 'application/json' })
		};
		let actionType= {"action":"detester"};
		return this.http.patch<Collegue>('http://localhost:8080/collegues/'+unCollegue.pseudo,actionType);
	}

	enLigne() {
		if(navigator.onLine) {
			this.subjectEnLigne.next("En ligne");
		} else {
			this.subjectEnLigne.next("Hors ligne");
		}
	}

	listerHistoriqueVotes():Observable<Vote[]> {
		return this.subjectVote.asObservable();
	}

	remove(array,value) {
		for(let i=0; i<array.length;i++) {
			if(array[i].id == value) {
				this.subjectIdVote.next(value)
				this.refreshVotes(value);			
			}
		}
	}



}
