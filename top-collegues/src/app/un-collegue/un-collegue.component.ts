import { Component, OnInit, Input } from '@angular/core';
import {Collegue} from '../shared/domain/collegue'

@Component({
  selector: 'app-un-collegue',
  templateUrl: './un-collegue.component.html',
  styleUrls: ['./un-collegue.component.css']
})
export class UnCollegueComponent implements OnInit {
	@Input() collegue:Collegue
	score: number

  	constructor() {
  		
  	}

  	ngOnInit() {
  		this.score = this.collegue.score
  	}

  	scoreChanges(event) {
	    this.score = event
	}

	handleEventClicked(newScore){
	    return this.score = newScore;
	}

}
