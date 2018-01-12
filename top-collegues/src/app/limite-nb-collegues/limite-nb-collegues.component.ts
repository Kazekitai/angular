import { Component, Output, Input, EventEmitter, OnInit } from '@angular/core';
import {Collegue} from '../shared/domain/collegue';
import { Observable } from 'rxjs/Observable';
import { CollegueService } from '../shared/service/collegue.service';

@Component({
  selector: 'app-limite-nb-collegues',
  templateUrl: './limite-nb-collegues.component.html',
  styleUrls: ['./limite-nb-collegues.component.css']
})
export class LimiteNbColleguesComponent implements OnInit {
	@Output() change: EventEmitter<string> = new EventEmitter<string>();
	// @Input() collegues:Collegue[];
	collegues: Collegue[];
	// limite:HTMLInputElement;
	limite:string;

  constructor(private collegueService:CollegueService) { }

  ngOnInit() {
	this.collegueService.subject.subscribe(col => this.collegues = col );
    this.collegueService.subject.next(this.collegues);
  }

  	handlelimitChanges(event) {
		this.limite = event.target.value;
		if(event.target.value != "") {
			this.change.emit(this.limite);
		} else {
			event.target.value = "";
			console.log(this.collegues.length);
			this.change.emit(String(this.collegues.length));
		}
		
	}

}
