import { Component, OnInit } from '@angular/core';
import {Collegue} from '../shared/domain/collegue'
import { CollegueService } from '../shared/service/collegue.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-vue-carrousel',
  templateUrl: './vue-carrousel.component.html',
  styleUrls: ['./vue-carrousel.component.css']
})
export class VueCarrouselComponent implements OnInit {

	collegues$: Observable<Collegue[]>;

  	constructor(private collegueService:CollegueService) { }

  	ngOnInit() {
		this.collegues$ = this.collegueService.listerCollegues();
	  }

	scoreChanges(collegue:Collegue,event) {
	    collegue.score = event;
	}

	handleEventClicked(collegue:Collegue,newScore){
	    return collegue.score = newScore;
	}
	  

}
