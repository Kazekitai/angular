import { Component, OnInit } from '@angular/core';
import {Collegue} from '../shared/domain/collegue'
import { CollegueService } from '../shared/service/collegue.service';

@Component({
  selector: 'app-vue-carrousel',
  templateUrl: './vue-carrousel.component.html',
  styleUrls: ['./vue-carrousel.component.css']
})
export class VueCarrouselComponent implements OnInit {

  	collegues:Collegue[] = [];

  	constructor(private collegueService:CollegueService) { }

  	ngOnInit() {
	  	this.collegueService.listerCollegues().then(result => {
			for(let i in result) {
				let collegue:Collegue = new Collegue(result[i].id, result[i].pseudo, result[i].imageUrl,result[i].score);
				this.collegues.push(collegue);
			}
		});
  	}

}
