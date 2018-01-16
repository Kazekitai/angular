import { Component, OnInit, Input } from '@angular/core';
import {Collegue} from '../shared/domain/collegue'
import { CollegueService } from '../shared/service/collegue.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-un-collegue',
  templateUrl: './un-collegue.component.html',
  styleUrls: ['./un-collegue.component.css'],
})
export class UnCollegueComponent implements OnInit {
	@Input() collegue:Collegue

  	constructor() {
  	}

  	ngOnInit() {
		  if(this.collegue.pseudo == undefined) {
			this.collegue.pseudo = "";
		  }
	}

	scoreChanges(event) {
	    this.collegue.score = event;
	}

	handleEventClicked(newScore){
	    return this.collegue.score = newScore;
	}
	
}
