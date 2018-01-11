import { Component, Output, Input, EventEmitter, OnInit } from '@angular/core';
import {Collegue} from '../shared/domain/collegue';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-limite-nb-collegues',
  templateUrl: './limite-nb-collegues.component.html',
  styleUrls: ['./limite-nb-collegues.component.css']
})
export class LimiteNbColleguesComponent implements OnInit {
	@Output() change: EventEmitter<number> = new EventEmitter<number>();
	// @Input() collegues:Collegue[];
	@Input() collegues$: Observable<Collegue[]>;
	// limite:HTMLInputElement;
	limite:number;

  constructor() { }

  ngOnInit() {
		this.collegues$.subscribe(collegues => this.limite = collegues.length);
  }

  	handlelimitChanges(event) {
	  	this.limite = Number(event.target.value);
			this.change.emit(this.limite);
		}

}
