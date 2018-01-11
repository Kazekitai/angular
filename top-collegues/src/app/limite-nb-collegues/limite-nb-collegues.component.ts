import { Component, Output, Input, EventEmitter, OnInit } from '@angular/core';
import {Collegue} from '../shared/domain/collegue'

@Component({
  selector: 'app-limite-nb-collegues',
  templateUrl: './limite-nb-collegues.component.html',
  styleUrls: ['./limite-nb-collegues.component.css']
})
export class LimiteNbColleguesComponent implements OnInit {
	@Output() change: EventEmitter<number> = new EventEmitter<number>();
	@Input() collegues:Collegues[];
	limite:HTMLInputElement;

  constructor() { }

  ngOnInit() {
  	this.limite = collegues.length;
  	this.limite.value = collegues.length;
  	console.log(this.limite);
  }

  	handlelimitChanges() {
	  	this.change.emit(this.limite);
	  	console.log(this.limite);
  	}

}
